
import React, { useState } from 'react';

const GuessingGame = () => {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    setGuess(event.target.value);
  };
