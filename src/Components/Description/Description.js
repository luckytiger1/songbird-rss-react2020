import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Description.scss';
import birdsData from '../birds';
import AudioPlayer from '../AudioPlayer/AudioPlayer';

export default class Description extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-md-6">
        <div className="birds-details card">
          <p
            className="instruction"
            style={
              this.props.selected ? { display: 'none' } : { display: 'block' }
            }
          >
            <span>Послушайте плеер.</span>
            <span>Выберите птицу из списка</span>
          </p>
          <div
            className="card-body"
            style={
              this.props.selected ? { display: 'block' } : { display: 'none' }
            }
          >
            <img
              className="bird-image"
              src={birdsData[this.props.page][this.props.id].image}
              alt=""
            />
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <h4>{birdsData[this.props.page][this.props.id].name}</h4>
              </li>
              <li className="list-group-item">
                <span>{birdsData[this.props.page][this.props.id].species}</span>
              </li>
              <li className="list-group-item">
                <AudioPlayer id={this.props.id} page={this.props.page} />
              </li>
            </ul>
          </div>
          <span
            className="bird-description"
            style={
              this.props.selected ? { display: 'block' } : { display: 'none' }
            }
          >
            {birdsData[this.props.page][this.props.id].description}
          </span>
        </div>
      </div>
    );
  }
}

Description.propTypes = {
  selected: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
};
