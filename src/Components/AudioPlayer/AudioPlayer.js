/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import birdsData from '../birds';
import playingIcon from './playing.svg';
import pausedIcon from './paused.svg';
import getTime from '../utils';

export default class AudioPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      currentTime: null,
      duration: null,
      progress: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { page, id } = this.props;
    this.player.src = birdsData[page][id].audio;
    this.player.addEventListener('timeupdate', (e) => {
      this.setState({
        currentTime: e.target.currentTime,
        duration: e.target.duration,
        progress: (100 / this.player.duration) * this.player.currentTime,
      });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { playing } = this.state;
    const { page, id, win } = this.props;
    if (playing !== prevState.playing) {
      if (!playing) {
        this.player.pause();
      } else {
        this.player.play();
      }
    }
    if (
      page !== prevProps.page ||
      id !== prevProps.id ||
      win !== prevProps.win
    ) {
      this.player.pause();
      this.player.currentTime = 0;
      this.setState({
        playing: false,
        progress: 0,
      });
      this.player.src = birdsData[page][id].audio;
    }
  }

  componentWillUnmount() {
    this.player.removeEventListener('timeupdate', () => {});
    this.player.removeEventListener('loadedmetadata', () => {});
  }

  handleClick(e) {
    const currTime =
      (e.nativeEvent.offsetX / this.progressBar.offsetWidth) *
      this.player.duration;
    this.setState({
      currentTime: currTime,
      progress: (100 / this.player.duration) * currTime,
    });
    this.player.currentTime = currTime;
  }

  render() {
    const { playing, progress, currentTime, duration } = this.state;
    return (
      <div className="audio-player">
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <audio
          ref={(reference) => {
            this.player = reference;
          }}
          className="player"
          hidden
        />
        <div className="controls">
          <div
            className="playback-button"
            role="button"
            tabIndex="0"
            onClick={() => {
              this.setState({
                playing: !playing,
              });
            }}
          >
            {playing && progress !== 100 ? (
              <img src={playingIcon} alt="playing" />
            ) : (
              <img src={pausedIcon} alt="paused" />
            )}
          </div>
          <div className="timebar">
            <div
              className="progress"
              ref={(reference) => {
                this.progressBar = reference;
              }}
              role="progressbar"
              tabIndex="0"
              onClick={(e) => this.handleClick(e)}
            >
              <div
                className="progress-bar progress-bar-striped progress-bar-animated"
                role="progressbar"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-label="progressbar"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div
              className="timebar-circle"
              style={{
                left: `${progress}%`,
              }}
              ref={(reference) => {
                this.control = reference;
              }}
            />
            <div className="timebar-time-info">
              <div>{getTime(currentTime)}</div>
              <div>{getTime(duration)}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AudioPlayer.propTypes = {
  id: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  win: PropTypes.bool,
};

AudioPlayer.defaultProps = {
  win: false,
};
