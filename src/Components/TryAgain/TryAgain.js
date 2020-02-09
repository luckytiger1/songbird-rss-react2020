import React from 'react';
import PropTypes from 'prop-types';

export default function TryAgain(props) {
  const { score, resetGame } = props;
  return (
    <div>
      <h1
        className="display-3 text-center"
        style={{ fontSize: '2.5rem', paddingBottom: '25px' }}
      >
        Поздравляем!
      </h1>
      <p className="lead text-center">
        Вы прошли викторину и набрали {score} из 30 возможных баллов
      </p>
      <hr className="my-4" />
      <button
        type="button"
        className="btn btn-next btn-game-over"
        onClick={resetGame}
      >
        Попробовать еще раз!
      </button>
    </div>
  );
}

TryAgain.propTypes = {
  score: PropTypes.number.isRequired,
  resetGame: PropTypes.func.isRequired,
};
