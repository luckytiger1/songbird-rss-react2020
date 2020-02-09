import React, { Component } from 'react';
import Header from './Header/Header';
import Question from './Question/Question';
import Answers from './Answers/Answers';
import Description from './Description/Description';
import Congratulation from './Congratulation/Congratulation';
import '../assets/styles/style.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      random: Math.floor(Math.random() * 6),
      score: 0,
      selected: false,
      win: false,
      try: 0,
      page: 0,
    };
    this.page = null;
    this.changeSelectedAndId = this.changeSelectedAndId.bind(this);
    this.changeWinState = this.changeWinState.bind(this);
    this.handleNextPage = this.handleNextPage.bind(this);
    this.resetGame = this.resetGame.bind(this);
    this.handleTries = this.handleTries.bind(this);
    this.handleScore = this.handleScore.bind(this);
  }

  changeSelectedAndId(id) {
    this.setState({
      selected: true,
      id,
    });
  }

  changeWinState() {
    this.setState({
      win: true,
    });
  }

  handleTries() {
    this.setState((prevState) => ({
      try: prevState.try + 1,
    }));
  }

  handleScore() {
    this.setState((prevState) => ({
      score: prevState.score + (6 - prevState.try),
    }));
  }

  resetGame() {
    this.setState((prevState) => {
      this.page = prevState.page;
      return {
        selected: false,
        win: false,
        try: 0,
        page: 0,
        random: Math.floor(Math.random() * 6),
        score: 0,
      };
    });
  }

  handleNextPage() {
    const { win } = this.state;
    if (win) {
      this.setState((prevState) => {
        this.page = prevState.page;
        return {
          selected: false,
          win: false,
          try: 0,
          page: (prevState.page + 1) % 6,
          random: Math.floor(Math.random() * 6),
        };
      });

      [...document.querySelector('.item-list').children].forEach((el) =>
        el.classList.remove('success', 'error'),
      );
    }
  }

  render() {
    const { score, page, random, win, selected, id } = this.state;
    return (
      <div className="App">
        <Header score={score} page={page} />
        <Congratulation
          page={page}
          score={score}
          prevPage={this.page}
          resetGame={this.resetGame}
        />
        <Question id={random} page={page} win={win} prevPage={this.page} />
        <div
          className="row mb2"
          style={(this.page + 1) % 6 === 0 ? { display: 'none' } : {}}
        >
          <Answers
            page={page}
            selectHandler={this.changeSelectedAndId}
            changeWinState={this.changeWinState}
            win={win}
            handleTries={this.handleTries}
            handleScore={this.handleScore}
          />
          <Description selected={selected} id={id} page={page} />
          <button
            className="btn"
            style={win ? { backgroundColor: '#00bc8c' } : {}}
            onClick={this.handleNextPage}
            type="button"
          >
            Next Question
          </button>
        </div>
      </div>
    );
  }
}

export default App;
