import React, { createContext, useState } from "react";
import BookmarkService from "../services/BookmarkService";

export const BarContext = createContext();

const BarProvider = ({ children }) => {
  const [barName, setBarName] = useState('');
  const saveBarName = async name => {
    await BookmarkService.setCurrentBarName(barName); // Store the bar name in the browser API
    setBars(name);
  };
  return (
    <BarContext.Provider value={{ barName, saveBarName }}>
      {children}
    </BarContext.Provider>
  );
};

export default BarProvider;