import React, { Component } from 'react';

 class PlayerBar extends Component {
   render() {
     return (
       <section className="player-bar">
        <section id="buttons">
          <button id="previous">
            <span className="icon ion-md-skip-backward"></span>
          </button>
          <button id="play-pause">
            <span className={this.props.isPlaying ? 'icon ion-md-pause' : 'icon ion-md-play'}></span>

          </button>
          <button id="next">
            <span className="icon ion-md-skip-forward"></span>
          </button>
        </section>
        <section id="time-control">
          <div className="current-time">–:––</div>
          <input type="range" className="seek-bar" value="0" />
          <div className="total-time">–:––</div>
        </section>
        <div className="icon ion-md-volume-low"></div>
        <section id="volume-control">
          <input type="range" className="seek-bar" value="80" />
          <div className="icon ion-md-volume-high"></div>
        </section>
       </section>
     );
   }
 }

 export default PlayerBar;