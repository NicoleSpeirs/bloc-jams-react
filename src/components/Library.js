import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';
import './Library.css'

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = { albums: albumData };
  }
    render () {
        return (
        <section className='Library bg-cover'>
          {
            this.state.albums.map( (album, index) =>
              <Link to={`/album/${album.slug}`} key={index}>
                <img
                  className="album-cover"
                  src={album.albumCover}
                  alt={album.title}
                  thumbnail fluid
                  />
                  <div className="click-to-album">
                    <div>{album.title}</div>
                    <div>{album.artist}</div>
                    <div>{album.songs.length} songs</div>
                </div>
            </Link>
            )
          }
        </section>
        );
    }
}

export default Library;
