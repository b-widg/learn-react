import React from 'react';
import Card from './Card.js';
import InputEvents from './events/InputEvents';
import './App.css';
import './Card.css';
import './events/Events.css';

function App() {
  return (
    <div className='App'>
      <Card />
      <InputEvents />
    </div>
  );
}

export default App;
