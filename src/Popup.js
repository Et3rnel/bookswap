import React, { useState, useEffect } from 'react';
import './Popup.css';
import './components/BookmarkFolderTable/BookmarkFolderTable.js';
import BookmarkFolderTable from './components/BookmarkFolderTable/BookmarkFolderTable.js';
import BookmarkService from './services/BookmarkService';
import BarNameInput from './components/BarNameInput/BarNameInput'

const Popup = () => {
  const [currentBarName, setCurrentBarName] = useState('');

  async function swap() {
    let newfolderTreeNode = await BookmarkService.createFolderInOtherBookmarks();
    let result = await BookmarkService.moveBarBookmarks(newfolderTreeNode.id);

    console.log('Test result');
    console.log(result);
    // let resultagain = await BookmarkService.moveFolderToBar();
  }

  useEffect(() => {
    BookmarkService.fetchCurrentBarName().then((name) => {
      console.log('Cc c le name : ');
      console.log(name);
  
      setCurrentBarName(name);

      // will catch both null and undefined.
      if (name == '') {
        console.log('name c null');
      }
    })
  }, [currentBarName]);

  return (
    <div className="Popup">
      {/* TODO : mettre un event de cette classe (donc le parent) pour refresh et mettre le bon
      component :) */}
      <BarNameInput />
      {/* <BookmarkFolderTable /> */}
    </div>
  );
}

export default Popup;
