import React from 'react';
import BarNameInput from '../BarNameInput/BarNameInput';

const BarNameSelect = (props) => {
  return (
    <div>
      <div class="container">
        <h1>Name current bar</h1>
      </div>
      <BarNameInput />
    </div>
  )
}

export default BarNameSelect;