import React, { useState, useContext } from 'react';
import { BarContext } from '../../context/barContext';
import './BarNameInput.scoped.css'

const BarNameInput = (props) => {
  const [barName, setBarName] = useState("Default's bar");
  const { saveBarName } = useContext(BarContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    saveBarName(barName);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label for="barName">Bar name</label>
      <input
        name="barName"
        type="text"
        value={barName}
        onChange={e => setBarName(e.target.value)}
      />
      <button type="submit">Start switching bookmarks!</button>
    </form>
  )
}

export default BarNameInput;