import React from 'react';
import Card from './Card.js';
import InputEvents from './events/InputEvents';
import './App.css';
import './Card.css';
import './events/Events.css';
import MovementEvents from './events/MovementEvents.js';

function App() {
  return (
    <div className='App'>
      <Card />
      <InputEvents />
      <MovementEvents />
    </div>
  );
}

export default App;
