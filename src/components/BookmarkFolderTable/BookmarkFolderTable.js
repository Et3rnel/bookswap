import React, { useState, useEffect, useContext } from 'react';
import './BookmarkFolderTable.scoped.css';
import BookmarkFolderRow from '../BookmarkFolderRow/BookmarkFolderRow';
import BookmarkService from '../../services/BookmarkService';
import { BarContext } from '../../context/barContext';

const BookmarkFolderTable = () => {
  const [listFolders, setListFolders] = useState([]);
  const {barName, saveBarName} = useContext(BarContext);

  /**
   * @param {BookmarkTreeNode} bookmarkNode
   */
  async function swapBookmarks(bookmarkNode) {
    let newfolderTreeNode = await BookmarkService.createFolderInOtherBookmarks(barName);
    await BookmarkService.moveBarBookmarks(newfolderTreeNode.id);
    await BookmarkService.moveFolderToBar(bookmarkNode);
    await saveBarName(bookmarkNode.title);
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
  }, [barName]);

  return (
    <ul>
      {listFolders}
    </ul>
  );
}

export default BookmarkFolderTable;