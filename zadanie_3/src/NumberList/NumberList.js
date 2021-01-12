import React from 'react';
import NumberButtons from '../NumberButtons/NumberButtons.js';

function NumberList({numbers, deleteNumber = f => f, decimalToBinary = f => f, decimalToOctal = f => f, decimalToHexadecimal = f => f, refresh}) {
    return (
      <ul>
        {numbers.map((i, x) => {
                return <NumberButtons i={i} x={x} deleteNumber={deleteNumber} decimalToBinary={decimalToBinary} decimalToOctal={decimalToOctal} decimalToHexadecimal={decimalToHexadecimal} refresh={refresh}/>
            })}
      </ul>
    );
}

export default NumberList;