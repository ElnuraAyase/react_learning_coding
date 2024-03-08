
import React, { useState } from 'react';

const ButtonToggle = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
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
