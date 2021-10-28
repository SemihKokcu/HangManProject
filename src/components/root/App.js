import React, { Component } from 'react';
import HangMan from '../hang-man/HangMan';
import "./App.css"



class App extends Component {
       
  componentDidMount(){
    document.title = "Hangman"
  }
  render() {
    return (
      <div className="App">
        <HangMan></HangMan> </div>
    );
  }
}

export default App;