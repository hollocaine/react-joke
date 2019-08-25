import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

class Joke extends Component {
  getColor() {
    if (this.props.votes >= 15) {
      return '#GCAF50';
    } else if (this.props.votes >= 12) {
      return '#8BC94A';
    } else if (this.props.votes >= 9) {
      return '#CDDC39';
    } else if (this.props.votes >= 6) {
      return '#FEFEB3';
    } else if (this.props.votes >= 3) {
      return '#FFC107';
    } else if (this.props.votes >= 0) {
      return '#FF9800';
    } else {
      return '#F44336';
    }
  }
  getEmoji() {
    if (this.props.votes >= 15) {
      return 'em em-rolling_on_the_floor_laughing';
    } else if (this.props.votes >= 12) {
      return 'em em-laughing';
    } else if (this.props.votes >= 9) {
      return 'em em-smiley';
    } else if (this.props.votes >= 6) {
      return 'em em-slightly_smiling_face';
    } else if (this.props.votes >= 3) {
      return 'em em-neutral_face';
    } else if (this.props.votes >= 0) {
      return 'em em-confused';
    } else {
      return 'em em-angry';
    }
  }
  render() {
    return (
      <div className="Joke">
        <div className="Joke-buttons">
          <FontAwesomeIcon
            icon={faArrowUp}
            onClick={this.props.upVote}
            className="arrow-up"
          />
          <span className="Joke-votes" style={{ borderColor: this.getColor() }}>
            {this.props.votes}
          </span>
          <FontAwesomeIcon
            icon={faArrowDown}
            onClick={this.props.downVote}
            className="arrow-down"
          />
        </div>
        <div className="Joke-text">{this.props.text}</div>
        <div className="Joke-smiley">
          <i className={this.getEmoji()}></i>
        </div>
      </div>
    );
  }
}
export default Joke;
