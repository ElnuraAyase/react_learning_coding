import React, { useState } from 'react';

const Counter = () = {
  // State variable to store the counter value
  const [count, setCount] = useState(0);

  // Function to handle incrementing the counter
  const handleIncrement = () => {
    setCount(count + 1);    // Increment the count by 1
  };

  return (
    <div>
      {/* Display the current count */}
      <p>Count: {count}</p>
      {/* Button to increment the counter */}
      <button onClick=  {handleIncrement}>Increment</button>
    </div>
  );
};

export default Counter;

