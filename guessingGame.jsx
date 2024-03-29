
import React, { useState } from 'react';

const GuessingGame = () => {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    setGuess(event.target.value);
  };
  const handleGuess = () => {
    const userGuess = parseInt(guess);
    if (isNaN(userGuess)) {
      setMessage('Please enter a valid number.');
    } else if (userGuess === number) {
      setMessage('Congratulations! You guessed the correct number!');
    } else if (userGuess < number) {
      setMessage('Try a higher number.');
    } else {
      setMessage('Try a lower number.');
    }
    setGuess('');
  };

  return (
    <div>
      <h1>Guessing Game</h1>
      <p>Guess a number between 1 and 100:</p>
            <input type="text" value={guess} onChange={handleInputChange} />
      <button onClick={handleGuess}>Guess</button>
      <p>{message}</p>
    </div>
  );
};

export default GuessingGame;


