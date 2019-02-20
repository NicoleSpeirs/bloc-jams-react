import React, { Component } from "react";
import albumData from "./../data/albums";
import PlayerBar from "./PlayerBar";
import "./Album.css";

class Album extends Component {
  constructor(props) {
    super(props);

    const album = albumData.find(album => {
      return album.slug === this.props.match.params.slug;
    });

    this.state = {
      album: album,
      currentSong: album.songs[0],
      currentTime: 0,
      duration: album.songs[0].duration,
      currentVolume: 0,
      isPlaying: false,
      hoveringOver: null
    };

    this.audioElement = document.createElement("audio");
    this.audioElement.src = album.songs[0].audioSrc;
  }

  componentDidMount() {
    this.eventListeners = {
      timeupdate: e => {
        this.setState({ currentTime: this.audioElement.currentTime });
      },
      durationchange: e => {
        this.setState({ duration: this.audioElement.duration });
      },
      volumechange: e => {
        this.setState({ currentVolume: this.audioElement.currentVolume });
      }
    };
    this.audioElement.addEventListener(
      "timeupdate",
      this.eventListeners.timeupdate
    );
    this.audioElement.addEventListener(
      "durationchange",
      this.eventListeners.durationchange
    );
    this.audioElement.addEventListener(
      "volumechange",
      this.eventListeners.volumechange
    );
  }

  componentWillUnmount() {
    this.audioElement.src = null;
    this.audioElement.removeEventListener(
      "timeupdate",
      this.eventListeners.timeupdate
    );
    this.audioElement.addEventListener(
      "durationchange",
      this.eventListeners.durationchange
    );
    this.audioElement.addEventListener(
      "volumechange",
      this.eventListeners.volumechange
    );
  }

  play() {
    this.audioElement.play();
    this.setState({ isPlaying: true });
  }

  pause() {
    this.audioElement.pause();
    this.setState({ isPlaying: false });
  }

  setSong(song) {
    this.audioElement.src = song.audioSrc;
    this.setState({ currentSong: song });
  }

  isPlayingCurrentSong(song) {
    return this.state.isPlaying && this.state.currentSong === song;
  }

  handleSongClick(song) {
    const isSameSong = this.state.currentSong === song;
    if (this.state.isPlaying && isSameSong) {
      this.pause();
    } else {
      if (!isSameSong) {
        this.setSong(song);
      }
      this.play();
    }
  }
  handleNextClick() {
    const currentIndex = this.state.album.songs.findIndex(
      song => this.state.currentSong === song
    );
    const lastSong = this.state.album.songs.length - 1;
    console.log(lastSong);
    const newIndex = Math.min(lastSong, currentIndex + 1);
    const newSong = this.state.album.songs[newIndex];
    this.setSong(newSong);
    this.play();
  }

  handleVolumeChange(e) {
    const newVolume = this.audioElement.volume * e.target.value;
    this.audioElement.currentVolume = newVolume;
    this.setState({ currentVolume: newVolume });
  }

  handleTimeChange(e) {
    const newTime = this.audioElement.duration * e.target.value;
    this.audioElement.currentTime = newTime;
    this.setState({ currentTime: newTime });
    this.formatTime();
  }
  formatTime(seconds) {
    if (seconds) {
      const m = Math.floor(seconds / 60);
      const s = Math.floor(seconds % 60);
      return `${m}:${s}`;
    } else {
      return `-:--`;
    }
  }

  handlePrevClick() {
    const currentIndex = this.state.album.songs.findIndex(
      song => this.state.currentSong === song
    );
    const newIndex = Math.max(0, currentIndex - 1);
    const newSong = this.state.album.songs[newIndex];
    this.setSong(newSong);
    this.play();
  }

  handleMouseEnter(index) {
    this.setState({ hoveringOver: index });
  }

  handleMouseLeave(index) {
    this.setState({ hoveringOver: null });
  }

  render() {
    const { album, currentSong, isPlaying, hoveringOver } = this.state;
    const songs = album.songs;
    return (
      <section className="album row">
        <div>
          <div className="card mb-3">
            <div className="row no-gutters">
              <div className="col-sm-4">
                <img
                  className="card-img img-fluid"
                  id="album-cover-art"
                  src={album.albumCover}
                  alt={album.title}
                />
              </div>
              <div className="col-sm-8">
                <section id="album-info">
                  <div className="album-details">
                    <h1 id="album-title">{album.title}</h1>
                    <h2 className="artist">{album.artist}</h2>
                    <div id="release-info">{album.releaseInfo}</div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
        <table id="song-list">
          <colgroup>
            <col id="song-number-column" />
            <col id="song-title-column" />
            <col id="song-duration-column" />
          </colgroup>
          <tbody>
            {songs.map((song, index) => (
              <tr
                className="song"
                key={index}
                onClick={() => this.handleSongClick(song)}
                onMouseEnter={() => this.handleMouseEnter(index)}
                onMouseLeave={() => this.handleMouseLeave()}
              >
                <td>
                  {hoveringOver === index || currentSong === song ? (
                    <span>
                      {this.isPlayingCurrentSong(song) ? (
                        <span className="icon ion-md-pause" />
                      ) : (
                        <span className="icon ion-md-play-circle" />
                      )}
                    </span>
                  ) : (
                    <span>
                      {this.isPlayingCurrentSong(song) ? (
                        <span className="icon ion-md-play" />
                      ) : (
                        index + 1
                      )}
                    </span>
                  )}
                </td>
                <td>{song.title}</td>
                <td>{song.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <PlayerBar
          isPlaying={isPlaying}
          currentSong={this.state.currentSong}
          currentTime={this.audioElement.currentTime}
          duration={this.audioElement.duration}
          currentVolume={this.audioElement.currentVolume}
          handleSongClick={() => this.handleSongClick(this.state.currentSong)}
          handlePrevClick={() => this.handlePrevClick()}
          handleNextClick={() => this.handleNextClick()}
          handleTimeChange={e => this.handleTimeChange(e)}
          handleVolumeChange={e => this.handleVolumeChange(e)}
          formatTime={seconds => this.formatTime(seconds)}
        />
      </section>
    );
  }
}

export default Album;
