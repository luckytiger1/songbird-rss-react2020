import React, { Component } from 'react';
import PropTypes from 'prop-types';
import birdsData from '../birds';
import './Answers.scss';

export default class Answers extends Component {
  constructor(props) {
    super(props);
    this.checkAnswer = this.checkAnswer.bind(this);
  }

  checkAnswer(audio, e) {
    const questionAudio = document.querySelector('audio').src;
    const correctAudio = new Audio(
      'http://www.orangefreesounds.com/wp-content/uploads/2014/10/Correct-answer.mp3',
    );
    const wrongAudio = new Audio(
      'http://www.orangefreesounds.com/wp-content/uploads/2014/10/Family-feud-buzzer.mp3',
    );
    if (!this.props.win) {
      this.props.handleTries();
      if (audio === questionAudio) {
        e.target.classList.add('success');
        correctAudio.play();
        this.props.changeWinState();
        this.props.handleScore();
      } else {
        wrongAudio.play();
        e.target.classList.add('error');
      }
    }
  }

  render() {
    return (
      <div className="col-md-6">
        <ul className="item-list list-group">
          {birdsData[this.props.page].map((el, i) => {
            return (
              <li
                className="list-group-item"
                key={i}
                onClick={(e) => {
                  this.props.selectHandler(el.id - 1);
                  this.checkAnswer(el.audio, e);
                }}
              >
                <span className="li-btn" />
                {el.name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

Answers.propTypes = {
  page: PropTypes.number.isRequired,
  selectHandler: PropTypes.func.isRequired,
  changeWinState: PropTypes.func.isRequired,
  handleTries: PropTypes.func.isRequired,
  handleScore: PropTypes.func.isRequired,
  win: PropTypes.bool.isRequired,
};
