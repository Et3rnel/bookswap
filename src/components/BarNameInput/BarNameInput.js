import React, { useState, useEffect } from 'react';

const BarNameInput = (props) => {
    const [barName, setBarName] = useState("Default's bar");


    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Form submitted : ' + barName);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Bar name:
                <input 
                    type="text" 
                    value={barName}
                    onChange={e => setBarName(e.target.value)}
                />
            </label>
            <input type="submit" value="Create" />
        </form>
    )
}

export default BarNameInput;