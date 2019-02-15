import React, { Component } from "react";
import albumData from "./../data/albums";
import PlayerBar from './PlayerBar';

class Album extends Component {
  constructor(props) {
    super(props);

    const album = albumData.find(album => {
      return album.slug === this.props.match.params.slug;
    });

    this.state = {
      album: album,
      currentSong: album.songs[0],
      isPlaying: false,
      hoveringOver: null
    };

    this.audioElement = document.createElement("audio");
    this.audioElement.src = album.songs[0].audioSrc;
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
    return this.state.isPlaying && this.state.currentSong === song
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

  handleMouseEnter(index) {
    this.setState({hoveringOver: index });
    // console.log("Entered ", index)
  }

  handleMouseLeave(index) {
    this.setState({hoveringOver: null });
    // console.log("Hovering over: ", this.state.hoveringOver)
    // console.log("Left")
  }

  render() {
    const { album, currentSong, isPlaying, hoveringOver } = this.state
    const icon = "play-circle"
    const songs = album.songs;
    return (
      <section className="album">
        <section id="album-info">
          <img
            id="album-cover-art"
            src={album.albumCover}
            alt={album.title}
          />
          <div className="album-details">
            <h1 id="album-title">{album.title}</h1>
            <h2 className="artist">{album.artist}</h2>
            <div id="release-info">{album.releaseInfo}</div>
          </div>
          <span>Hovering over: {hoveringOver}</span>
          <br></br>
          <span>Is playing: {`${isPlaying}`}</span>
          <br></br>
          <span>current song: {currentSong.title}</span>
        </section>
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
                    <span>{this.isPlayingCurrentSong(song) ? (
                      <span className="icon ion-md-pause"></span>
                    ) : (
                      <span className="icon ion-md-play-circle"></span>
                    )}
                    </span>
                  ) : (
                    <span>{this.isPlayingCurrentSong(song) ? (
                      <span className="icon ion-md-play"></span>
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
        <PlayerBar isPlaying={this.state.isPlaying} currentSong={this.state.currentSong} />
      </section>
    );
  }
}

export default Album;
