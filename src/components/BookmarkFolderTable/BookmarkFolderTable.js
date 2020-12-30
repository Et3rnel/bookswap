import React, { useState, useEffect } from 'react';
import './BookmarkFolderTable.css';
import BookmarkFolderRow from '../BookmarkFolderRow/BookmarkFolderRow';
import BookmarkService from '../../services/BookmarkService';

const BookmarkFolderTable = () => {
    const [listFolders, setListFolders] = useState([]);

    function testUpdate() {
        alert('Must update');
    }

    async function fetchAll() {
        let bookmarks = await BookmarkService.fetchOtherBookmarks();
        const rows = bookmarks.map((bookmark) => 
            <BookmarkFolderRow 
                key={bookmark.id}
                callBack={testUpdate} 
                bookmarkNode={bookmark} 
            />
        );
        setListFolders(rows)
    }

    useEffect(() => {
        console.log('0');
        fetchAll();
    }, []);

    return (
        <ul>
            {listFolders}
        </ul>
    );
}

export default BookmarkFolderTable;