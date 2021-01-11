import React from 'react';
import BookmarkFolderTable from '../BookmarkFolderTable/BookmarkFolderTable';
import BookmarkCurrentBarRow from '../BookmarkCurrentBarRow/BookmarkCurrentBarRow';
import './BookmarkFolderContainer.scoped.css';

const BookmarkFolderContainer = (props) => {
  return (
    <div>
      <div class="container">
        <h1>Current bar</h1>
        <BookmarkCurrentBarRow barName={props.barName}/>
      </div>
      <BookmarkFolderTable barName={props.barName}/>
    </div>
  );
}

export default BookmarkFolderContainer;