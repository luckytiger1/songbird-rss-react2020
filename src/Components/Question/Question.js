import React from 'react';
import PropTypes from 'prop-types';
import birdImg from '../../assets/img/unknown-bird.jpg';
import AudioPlayer from '../AudioPlayer/AudioPlayer';
import './Question.scss';
import birdsData from '../birds';

export default function Question(props) {
  const { page, id, prevPage, win } = props;
  return (
    <div
      className="random-bird jumbotron rounded"
      style={(prevPage + 1) % 6 === 0 ? { display: 'none' } : {}}
    >
      <img
        src={win ? birdsData[page][id].image : birdImg}
        alt="bird"
        className="bird-image"
      />
      <div className="bird-question">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <h3>{win ? birdsData[page][id].name : '********'}</h3>
          </li>
          <li className="list-group-item">
            <AudioPlayer id={id} page={page} win={win} />
          </li>
        </ul>
      </div>
    </div>
  );
}
Question.propTypes = {
  id: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  win: PropTypes.bool.isRequired,
  prevPage: PropTypes.number,
};

Question.defaultProps = {
  prevPage: 0,
};
