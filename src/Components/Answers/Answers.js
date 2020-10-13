/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import birdsData from '../birds';
import './Answers.scss';

// const uuidv4 = require('uuid/v4');

export default class Answers extends Component {
  constructor(props) {
    super(props);
    this.checkAnswer = this.checkAnswer.bind(this);
  }

  checkAnswer(audio, e) {
    const questionAudio = document.querySelector('audio').src;
    const correctAudio = new Audio(
      'https://freesound.org/data/previews/131/131660_2398403-lq.mp3',
    );
    const wrongAudio = new Audio(
      'https://freesound.org/data/previews/73/73581_634166-lq.mp3',
    );
    const { win, handleTries, changeWinState, handleScore } = this.props;
    if (!win && !e.target.classList.contains('error')) {
      if (audio === questionAudio) {
        correctAudio.play();
        changeWinState();
        handleScore();
        e.target.classList.add('success');
      } else {
        wrongAudio.play();
        e.target.classList.add('error');
      }
      handleTries();
    }
  }

  render() {
    const { page, selectHandler } = this.props;
    return (
      <div className="col-md-6">
        <ul className="item-list list-group">
          {birdsData[page].map((el) => {
            return (
              <li
                className="list-group-item"
                key={el.id}
                onClick={(e) => {
                  selectHandler(el.id - 1);
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
