import './App.css';
import React, { useState, useEffect } from 'react';


function App() {

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => {
      setState(json)
    });
    }, []);

    const [state, setState] = useState(null)
    console.log('state', state)

  return (
    <div className="App">
      <header className="App-header">
          {state ? state.map(obj => <li>{obj.id}</li>) : <div>Loading</div>}
      </header>
    </div>
  );
}

export default App;
