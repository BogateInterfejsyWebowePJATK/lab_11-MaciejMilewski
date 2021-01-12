import React from 'react';
import NumberListItem from '../NumberListItem/NumberListItem.js'

function NumberList(props) {
    let numbers = props.numbers;
    return (
      <ul>
        {numbers.map((number) =>
          <NumberListItem key={number.toString()}
                    value={number} />
        )}
      </ul>
    );
}

export default NumberList;