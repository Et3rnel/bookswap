import React, { useState, useEffect } from 'react';
import BarNameInput from '../BarNameInput/BarNameInput';

const BarNameSelect = (props) => {
    const handleBarName = (barName) => {
        props.callBack(barName);
    }
    
    return (
        <div>
            <div class="container">
                <h1>Name current bar</h1>
            </div>
            <BarNameInput callBack={handleBarName}/>
        </div>
    )
}

export default BarNameSelect;