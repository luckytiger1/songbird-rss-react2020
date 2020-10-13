import React from 'react';
import PropTypes from 'prop-types';
import TryAgain from '../TryAgain/TryAgain';
import GameOver from '../GameOver/GameOver';

export default function Congratulation(props) {
  const { prevPage, score, resetGame } = props;
  return (
    <div
      className="jumbotron game-over"
      style={
        (prevPage + 1) % 6 === 0
          ? { display: 'block', textAlign: 'center' }
          : { display: 'none' }
      }
    >
      {score === 30 ? (
        <GameOver />
      ) : (
        <TryAgain resetGame={resetGame} score={score} />
      )}
    </div>
  );
}

Congratulation.propTypes = {
  score: PropTypes.number.isRequired,
  prevPage: PropTypes.number,
  resetGame: PropTypes.func.isRequired,
};
Congratulation.defaultProps = {
  prevPage: 0,
};
