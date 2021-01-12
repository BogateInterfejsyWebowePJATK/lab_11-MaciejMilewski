import React from 'react';
import './App.css';
import NumberList from './NumberList/NumberList.js';

function randomArray(length) {
  return Array.from({length: length}, () => Math.floor(Math.random() * 99));
}

function App() {
    const [numbers, setNumbers] = React.useState([])

    React.useEffect(() => {
        randomNumbers()
    }, [])

    const randomNumbers = () => {
        setNumbers(randomArray(10));
    }

  return (
    <div>
        <NumberList numbers={numbers} />
        <br/>
        <button onClick={randomNumbers}>Generate random numbers</button>
    </div>
  );
}

export default App;
