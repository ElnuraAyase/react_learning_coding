
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


