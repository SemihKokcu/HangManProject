import React, { Component } from "react";
import { randomWord } from "../../entities/Word";
import "./HangMan.css";
import frame0 from "../../images/frame1.png";
import frame1 from "../../images/frame2.png";
import frame2 from "../../images/frame3.png";
import frame3 from "../../images/frame4.png";
import frame4 from "../../images/frame5.png";
import frame5 from "../../images/frame6.png";
import frame6 from "../../images/frame7.png";
import frame7 from "../../images/frame8.png";
import frame8 from "../../images/frame9.gif";
import frame9 from "../../images/frame-10-11-12.gif";
import frame10 from "../../images/frame10.png"


class HangMan extends Component {
  static defaultProps = {
    maxWrong: 9,
    images: [
      frame0,
      frame1,
      frame2,
      frame3,
      frame4,
      frame5,
      frame6,
      frame7,
      frame8,
      frame9,
      frame10,
    ],
  };
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { value: "" };
    this.state = {
      mistake: 0,
      guessed: new Set([]),
      answer: randomWord(),
    };
  }

  generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map((letter) => (
      <button
         class="btn btn-lg btn-danger m-2"
        key={letter}
        value={letter}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(letter)}
      >
        {letter}
      </button>
    ));
  }
  handleGuess = (e) => {
    let letter = e.target.value;
    this.setState((st) => ({
      guessed: st.guessed.add(letter),
      mistake: st.mistake + (st.answer.includes(letter) ? 0 : 1),
    }));
  };

  resetButton = () => {
    this.setState({
      mistake: 0,
      guessed: new Set([]),
      answer: randomWord(),
      value: "",
    });
  };

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  guessedWord() {
    return this.state.answer
      .split("")
      .map((letter) =>
        this.state.guessed.has(letter) ? (
          letter
        ) : (
          // <button className="btn btn-dark">{"_"}</button> 
          " _"
        )
      );
  } // buton olunca okumama sorunu
  handleSubmit(event) {
    if (this.state.value === this.state.answer) {
      alert("You WON :"+this.state.answer)
      this.resetButton();
      
    } else {
      alert("WRONG GUESS")
      this.state.mistake = this.state.mistake + 1;
    }
    event.preventDefault();
  }

  render() {
    const gameOver = this.state.mistake >= this.props.maxWrong;
    const isWinner = this.guessedWord().join("") === this.state.answer;

    let gameStat = this.generateButtons();

    if (isWinner) {
      gameStat = "You Won!!!";
    }

    if (gameOver) {
      gameStat = "You Lost!!!";
    }

    return (
      <div id="Hangman" className="container">
        <span>HANGMAN</span>

        <div className="float-right">
          Wrong Guesses: {this.state.mistake} of {this.props.maxWrong}
        </div>
        
        <div id="winn" className="text-center">
          {
           isWinner ?  <img src={this.props.images[10]} width="250" alt="" /> :<img src={this.props.images[this.state.mistake]} width="250" alt="" />
          }
          
        </div>
        <div className="text-center">
          <h4>Guess the Marvel Characters:</h4>
          <p>{!gameOver ? this.guessedWord() : this.state.answer}</p>
          <form id="form"onSubmit={this.handleSubmit}>
            <input
              className="form-control"
              placeholder="Type your guess (if your guess is wrong, your next letter choice will be counted as two errors)"
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <input className="btn btn-danger btn" type="submit" value="Guess" />
          </form>
          
          <p>{gameStat}</p>
          <button className="btn btn-danger" onClick={this.resetButton}>
            PLAY AGAIN
          </button>
        </div>
      </div>
    );
  }
}

export default HangMan;
