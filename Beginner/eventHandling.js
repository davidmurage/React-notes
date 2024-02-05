import React, { useState } from 'react';

const EventHandlingExample = () => {
  // Declare a state variable to store the button click count
  const [clickCount, setClickCount] = useState(0);

  // Event handler function for the button click
  const handleButtonClick = () => {
    // Update the click count when the button is clicked
    setClickCount(clickCount + 1);
  };

  return (
    <div>
      <h2>Event Handling in React</h2>
      <p>Button Click Count: {clickCount}</p>
      
      {/* Button with onClick event */}
      <button onClick={handleButtonClick}>Click me!</button>
    </div>
  );
};

export default EventHandlingExample;