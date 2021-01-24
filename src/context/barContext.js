import React, { createContext, useState, useEffect } from "react";
import BookmarkService from "../services/BookmarkService";

export const BarContext = createContext();

const BarProvider = ({ children }) => {
  const [barName, setBarName] = useState('');

  const saveBarName = name => {
    setBarName(name);
    BookmarkService.setCurrentBarName(name); // Store the bar name in the browser API
  };

  useEffect(() => {
    console.log('useEffect barContext wiht barName : ' + barName);
    BookmarkService.fetchCurrentBarName().then((name) => {
      if (barName !== name) {
        saveBarName(name); // Init. our app barName with the one stored in the browser
      }
    })
  }, [barName]);

  return (
    <BarContext.Provider value={{barName, saveBarName}}>
      {children}
    </BarContext.Provider>
  );
};

export default BarProvider;