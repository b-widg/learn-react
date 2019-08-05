import React from 'react';
import Card from './Card.js';
import InputEvents from './events/InputEvents';
import ShoppingList from './ShoppingList';
import './App.css';
import './Card.css';
import './events/Events.css';
import './ShoppingList.css';
import MovementEvents from './events/MovementEvents.js';
import FormValidation from './FormValidation.js';

function App() {
  return (
    <div className='App'>
      <Card />
      <InputEvents />
      <MovementEvents />
      <FormValidation />
      <ShoppingList />
    </div>
  );
}

export default App;
