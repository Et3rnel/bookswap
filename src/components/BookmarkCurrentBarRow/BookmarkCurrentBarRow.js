import React from 'react';
import './BookmarkCurrentBarRow.css';

const BookmarkCurrentBarRow = (props) => {
    return (
        <ul>
            <li onClick={() => {
                    props.callBack();
                }}>{props.barName}</li>       
        </ul>
    )
}

export default BookmarkCurrentBarRow;