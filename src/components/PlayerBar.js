import React, { Component } from 'react';
import "./Album.css";

 class PlayerBar extends Component {
   render() {
     return (
       <section className="icon ion-md-player-bar">
        <section id="buttons">
          <button type="button" className="btn btn-light" id="previous" onClick={this.props.handlePrevClick}>
            <span className="icon ion-md-skip-backward"></span>
          </button>
          <button type="button" className="btn btn-light" id="play-pause" onClick={this.props.handleSongClick} >
            <span className={this.props.isPlaying ? 'icon ion-md-pause' : 'icon ion-md-play'}></span>

          </button>
          <button type="button" className="btn btn-light" id="next" onClick={this.props.handleNextClick}>
            <span className="icon ion-md-skip-forward"></span>
          </button>
        </section>
        <section id="time-control">
          <div className="icon ion-md-current-time">{this.props.formatTime(this.props.currentTime)}</div>
          <input
            type="range"
            className="icon ion-md-seek-bar"
            value={(this.props.currentTime / this.props.duration) || 0}
            max="1"
            min="0"
            step="0.01"
            onChange={this.props.handleTimeChange}
          />
          <div className="icon ion-md-total-time">{this.props.formatTime(this.props.duration)}</div>
        </section>

        <div className="icon ion-md-volume-low"></div>
        <section id="volume-control">
          <input
            type="range"
            className="icon ion-md-seek-bar"
            value={this.props.currentVolume || 0}
            max="80"
            min="0"
            step="1"
            onChange={this.props.handleVolumeChange}

          />
          <div className="icon ion-md-volume-high"></div>
        </section>
       </section>
     );
   }
 }

 export default PlayerBar;