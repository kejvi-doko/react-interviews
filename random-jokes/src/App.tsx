import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Debugger} from "inspector";

function App() {
  const [joke,setJoke] = useState({
    setup:'',
    punchline:''
  })
  const getRandomJokes = async () => {
    const response = await fetch('https://official-joke-api.appspot.com/random_joke', {
      method: 'GET',
    });

    const {setup, punchline} = await response.json();
    setJoke({
      setup: setup,
      punchline: punchline
    })
  }

  return (
    <div className="App">
      <button onClick={getRandomJokes}>Get Jokes</button>
      <h1>{joke.setup}</h1>
      <h1>{joke.punchline}</h1>
    </div>
  );
}

export default App;
