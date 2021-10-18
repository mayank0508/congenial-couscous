import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myage: 20
    };  
  }
  handleClick = () => {
    this.setState((prevState, prevProps) => {
      return { myage: prevState.myage + prevProps.increment }; // here we are using the prevProps and preState the .increment is coming from the index.js
    });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.myage}</p>
          <button onClick={this.handleClick}>My age</button>
        </header>
      </div>
    );
  }
}

export default App;
