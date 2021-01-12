import React from 'react';
import './App.css';
import NumberList from './NumberList/NumberList.js';
import NumberTable from './NumberTable/NumberTable.js';

function randomArray(length) {
  return Array.from({length: length}, () => Math.floor(Math.random() * 99));
}

function App() {
  const [numbers, setNumbers] = React.useState([])
  const [table, setTable] = React.useState(false)
  const [refresh, setRefresh] = React.useState(false)

  React.useEffect(() => {
      randomNumbers()
  }, [])

  const randomNumbers = () => {
      setNumbers(randomArray(10))
      setRefresh(!refresh)
  }

  const deleteNumber = (x) => {
    let n = [...numbers];
    n.splice(x, 1)
    setNumbers(n)
  }

  const decimalToBinary = (x) => {
      return parseInt(numbers[x]).toString(2)
  }

  const decimalToOctal = (x) => {
      return parseInt(numbers[x]).toString(8)
  }

  const decimalToHexadecimal = (x) => {
      return parseInt(numbers[x]).toString(16)
  }

  return (
    <div>
        <button onClick={randomNumbers}>Generate random numbers</button>
        <br/>
        <button onClick={() => setTable(!table)}>{!table ? "Table" : "List"}</button>
            {!table
                ? <NumberList numbers={numbers} deleteNumber={deleteNumber} decimalToBinary={decimalToBinary} decimalToOctal={decimalToOctal} decimalToHexadecimal={decimalToHexadecimal} refresh={refresh}></NumberList>
                : <NumberTable numbers={numbers} deleteNumber={deleteNumber} decimalToBinary={decimalToBinary} decimalToOctal={decimalToOctal} decimalToHexadecimal={decimalToHexadecimal}></NumberTable>
            }
    </div>
  );
}

export default App;
