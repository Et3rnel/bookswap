import React, { useState, useEffect } from 'react';
import Tippy from '@tippyjs/react';
import BookmarkService from '../../services/BookmarkService';
import './BookmarkFolderRow.css';

const BookmarkFolderRow = (props) => {
    const [nbBookmarks, setNbBookmarks] = useState(0);

    useEffect(() => {
        console.log('useE de Row');
        BookmarkService.countBookmarksInFolder(props.bookmarkNode.id).then((result) => {
            setNbBookmarks(result);
        });
    }, [nbBookmarks]);

    return (
        <Tippy content={nbBookmarks + ' bookmarks'}>
            <li onClick={() => {
                props.callBack();
            }}>{props.bookmarkNode.title}</li>
        </Tippy>
    )
}

export default BookmarkFolderRow;