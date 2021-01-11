import React, { useState, useEffect } from 'react';
import './BookmarkFolderTable.scoped.css';
import BookmarkFolderRow from '../BookmarkFolderRow/BookmarkFolderRow';
import BookmarkService from '../../services/BookmarkService';

const BookmarkFolderTable = (props) => {
  const [listFolders, setListFolders] = useState([]);

  async function swapBookmarks() {
    let newfolderTreeNode = await BookmarkService.createFolderInOtherBookmarks(props.barName);
    let result = await BookmarkService.moveBarBookmarks(newfolderTreeNode.id);

    alert('Must update fired');
  }

  async function fetchAll() {
    let bookmarks = await BookmarkService.fetchOtherBookmarks();
    const rows = bookmarks.map((bookmark) =>
      <BookmarkFolderRow
        key={bookmark.id}
        callBack={swapBookmarks}
        bookmarkNode={bookmark}
      />
    );
    setListFolders(rows)
  }

  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <ul>
      {listFolders}
    </ul>
  );
}

export default BookmarkFolderTable;