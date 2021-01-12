import React from 'react';
import NumberListItem from '../NumberListItem/NumberListItem.js'

function NumberList(props) {
    let numbers = props.numbers;
    return (
      <ol>
        {numbers.map((number) =>
          <NumberListItem key={number.toString()}
                    value={number} />
        )}
      </ol>
    );
}

export default NumberList;