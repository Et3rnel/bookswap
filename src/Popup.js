import React, { useState, useEffect, useContext } from 'react';
import './Popup.css';
import BookmarkService from './services/BookmarkService';
import BarNameSelect from './components/BarNameSelect/BarNameSelect';
import BookmarkFolderContainer from './components/BookmarkFolderContainer/BookmarkFolderContainer';
import BarProvider, { BarContext } from './context/barContext';

const Popup = () => {
  const { barName, saveBarName } = useContext(BarContext);

  useEffect(() => {
    BookmarkService.fetchCurrentBarName().then((name) => {
      saveBarName(name); // TODO : I think it should not reset the bar name in the API right after getting it ?
    })
  }, [barName]);

  return (
    <BarProvider>
      <div className="Popup">
        {currentBarName
          ? <BookmarkFolderContainer />
          : <BarNameSelect />
        }
      </div>
    </BarProvider>
  );
}

export default Popup;
