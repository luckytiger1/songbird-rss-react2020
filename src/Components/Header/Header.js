import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';
import paginationList from '../variables';

const uuidv4 = require('uuid/v4');

export default function Header(props) {
  const { score, page } = props;
  return (
    <div className="header">
      <div className="top-panel">
        <div className="logo" />
        <div className="score__container">
          <h5>
            Your score is: <span className="score">{score}</span>
          </h5>
        </div>
      </div>
      <ul className="pagination">
        {paginationList.map((el, i) => {
          return (
            <li
              className={page === i ? 'page-item active' : 'page-item'}
              key={uuidv4()}
            >
              <a href="_blank" className="page-link" key={uuidv4()}>
                {el}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

Header.propTypes = {
  score: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
};
