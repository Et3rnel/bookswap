import React, { useState, useEffect } from 'react';
import './BookmarkFolderTable.css';
import BookmarkFolderRow from '../BookmarkFolderRow/BookmarkFolderRow';
import BookmarkService from '../../services/BookmarkService';

const BookmarkFolderTable = () => {
    const [bookmarks, setBookmarks] = useState([]);

    useEffect(() => {
        BookmarkService.fetchOtherBookmarks().then(function(bookmarks) {
            setBookmarks(bookmarks);
        });
    });

    const listItems = bookmarks.map((bookmark) =>
        <li>{bookmark}</li>
    );

    return (
        <ul>
            <BookmarkFolderRow>Coucou ça va?</BookmarkFolderRow>
            <BookmarkFolderRow>Oui test</BookmarkFolderRow>
        </ul>
    );
}

export default BookmarkFolderTable;