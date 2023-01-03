import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const changeCounterHandler = (operation:string)=>{
    switch (operation) {
      case '+':
        setCounter(counter+1);
        break
      case '-':
        setCounter(counter-1);
    }
  }
  return (
      <div>
        <div style={{fontSize: "xxx-large"}}>
          {counter}
        </div>
        <button onClick={()=>changeCounterHandler('+')}>+</button>
        <button onClick={()=>changeCounterHandler('-')}>-</button>
      </div>
  );
}

export default App;
