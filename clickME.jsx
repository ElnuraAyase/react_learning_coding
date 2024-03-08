
import React, { useState } from 'react';

const ButtonToggle = () => {
    // Define state variable to track if the button is clicked or not
  const [isClicked, setIsClicked] = useState(false);

    // Function to handle button click event
  const handleClick = () => {
        // Toggle the value of isClicked state when button is clicked

    setIsClicked(!isClicked);
  };
  return (
    <div>
      <button onClick={handleClick}>
        {isClicked ? 'Clicked!' : 'Click Me!'}
      </button>
    </div>
  );
};

export default ButtonToggle;
