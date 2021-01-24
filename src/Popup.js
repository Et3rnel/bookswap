import React, { useState, useContext } from 'react';
import './Popup.css';
import BookmarkService from './services/BookmarkService';
import BarNameSelect from './components/BarNameSelect/BarNameSelect';
import BookmarkFolderContainer from './components/BookmarkFolderContainer/BookmarkFolderContainer';
import { BarContext } from './context/barContext';

const Popup = () => {
  const {barName, saveBarName} = useContext(BarContext);

  return (
    <div className="Popup">
      {barName
        ? <BookmarkFolderContainer />
        : <BarNameSelect />
      }
    </div>
  );
}

export default Popup;
