import React, { useContext } from 'react';
import { BarContext } from '../../context/barContext';
import './BookmarkCurrentBarRow.scoped.css';

const BookmarkCurrentBarRow = () => {
  const { barName } = useContext(BarContext);

  return (
    <ul>
      <li>{barName}</li>
    </ul>
  )
}

export default BookmarkCurrentBarRow;