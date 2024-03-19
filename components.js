import React from 'react'; // Import React package

class SimpleComponent extends React.Component { // Define a class component
  constructor(props) {
    super(props);
    // Initialize state
    this.state = {
      count: 0 // Initial count value
    };
  }

  // Method to increment count
  incrementCount = () => {
    // Update state to increment count by 1
    this.setState({ count: this.state.count + 1 });
  }

 
