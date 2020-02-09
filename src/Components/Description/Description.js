import React from 'react';
import PropTypes from 'prop-types';
import './Description.scss';
import birdsData from '../birds';
import AudioPlayer from '../AudioPlayer/AudioPlayer';

export default function Description(props) {
  const { selected, page, id } = props;
  return (
    <div className="col-md-6">
      <div className="birds-details card">
        <p
          className="instruction"
          style={selected ? { display: 'none' } : { display: 'block' }}
        >
          <span>Послушайте плеер.</span>
          <span>Выберите птицу из списка</span>
        </p>
        <div
          className="card-body"
          style={selected ? { display: 'block' } : { display: 'none' }}
        >
          <img className="bird-image" src={birdsData[page][id].image} alt="" />
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <h4>{birdsData[page][id].name}</h4>
            </li>
            <li className="list-group-item">
              <span>{birdsData[page][id].species}</span>
            </li>
            <li className="list-group-item">
              <AudioPlayer id={id} page={page} />
            </li>
          </ul>
        </div>
        <span
          className="bird-description"
          style={selected ? { display: 'block' } : { display: 'none' }}
        >
          {birdsData[page][id].description}
        </span>
      </div>
    </div>
  );
}

Description.propTypes = {
  selected: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
};
