import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';
import Image from 'react-bootstrap/Image';
import './Library.css'

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = { albums: albumData };
  }
    render () {
        return (
        <section className='Library'>
          {
            this.state.albums.map( (album, index) =>
              <Link to={`/album/${album.slug}`} key={index}>
                <Image
                  src={album.albumCover}
                  alt={album.title}
                  className="album-cover"
                  thumbnail fluid
                  />
                <div>{album.title}</div>
                <div>{album.artist}</div>
                <div>{album.songs.length} songs</div>

            </Link>
            )
          }
        </section>
        );
    }
}

export default Library;
