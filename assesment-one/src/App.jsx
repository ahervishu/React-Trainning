import logo from './logo.svg';
import './App.css';
import SimpleJSX from './Components/SimpleJSX';
import ArrayOfUsers from './Components/ArrayOfUsers';
import ShowHide from './Components/ShowHide';
import UpdateParentState from './Components/UpdateParentState';
import { useState } from 'react';
import SumOfTwoNumbers from './Components/SumOfTwoNumbers';
import CounterApp from './Components/CounterApp';

function App() {

  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count + 1);
  }

  const users = [
    { id: 1, name: 'Aher Vishwajit' },
    { id: 2, name: 'Pranav gulavale' },
    { id: 3, name: 'Amol Hase' },
  ];
  return (
    <div className="App">
      <SimpleJSX />
      <ArrayOfUsers users={users} />
      <ShowHide />
      <div>

        <h4>
          updating Parent state
        </h4>
        <h1>Count: {count}</h1>
        <UpdateParentState onIncrement={incrementCount} />
      </div>
      <SumOfTwoNumbers />
      <CounterApp />
      <h3>
        Thank You !
      </h3>
    </div>
  );
}

export default App;
