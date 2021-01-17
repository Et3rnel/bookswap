import React from 'react';
import BookmarkFolderTable from '../BookmarkFolderTable/BookmarkFolderTable';
import BookmarkCurrentBarRow from '../BookmarkCurrentBarRow/BookmarkCurrentBarRow';
import './BookmarkFolderContainer.scoped.css';

const BookmarkFolderContainer = () => {
  return (
    <div>
      <div class="container">
        <h1>Current bar</h1>
        <BookmarkCurrentBarRow/>
      </div>
      <BookmarkFolderTable/>
    </div>
  );
}

export default BookmarkFolderContainer;