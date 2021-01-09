import React, { useState, useEffect } from 'react';
import './Popup.css';
import './components/BookmarkFolderTable/BookmarkFolderTable.js';
import BookmarkService from './services/BookmarkService';
import BarNameSelect from './components/BarNameSelect/BarNameSelect';
import BookmarkFolderContainer from './components/BookmarkFolderContainer/BookmarkFolderContainer';

const Popup = () => {
  const [currentBarName, setCurrentBarName] = useState('');

  async function swap() {
    let newfolderTreeNode = await BookmarkService.createFolderInOtherBookmarks();
    let result = await BookmarkService.moveBarBookmarks(newfolderTreeNode.id);

    console.log('Test result');
    console.log(result);
    // let resultagain = await BookmarkService.moveFolderToBar();
  }

  async function updateBarName(barName) {
    await BookmarkService.setCurrentBarName(barName); // Store the bar name in the browser API
    setCurrentBarName(barName);
  }

  useEffect(() => {
    BookmarkService.fetchCurrentBarName().then((name) => {
      setCurrentBarName(name);
    })
  }, [currentBarName]);

  return (
    <div className="Popup">
        {currentBarName
          ? <BookmarkFolderContainer barName={currentBarName}/>
          : <BarNameSelect callBack={updateBarName} />
        }
    </div>
  );
}

export default Popup;
