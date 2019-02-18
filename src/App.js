import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
              <img
              alt="logo"
              src="https://i.ibb.co/RpL9Py1/music-39881-640.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              />
            {' Bloc Jams '}
            </Navbar.Brand>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/library'>Library</Nav.Link>
          </Navbar>
        </header>
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />
        </main>
    </div>
    );
  }
}

export default App;
