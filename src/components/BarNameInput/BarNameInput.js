import React, { useState, useEffect } from 'react';
import './BarNameInput.scoped.css'

const BarNameInput = (props) => {
  const [barName, setBarName] = useState("Default's bar");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.callBack(barName);
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