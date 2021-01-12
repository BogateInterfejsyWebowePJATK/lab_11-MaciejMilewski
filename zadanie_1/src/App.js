import './App.css';
import NumberList from './NumberList/NumberList.js';

function App() {
  let numbers = Array.from({length: 10}, () => Math.floor(Math.random() * 99));

  return (
    <div>
        <NumberList numbers={numbers}/>
    </div>
  );
}

export default App;
