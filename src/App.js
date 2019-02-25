import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landing";
import Library from "./components/Library";
import Album from "./components/Album";

class App extends Component {
  render() {
    return (
      <div className="App">
      <header>
        <nav className="navbar">
          <div className="navbar-logo">
            <img
            alt="logo"
            src="https://i.ibb.co/RpL9Py1/music-39881-640.png"
            width="30"
            height="30"

            />
            <h1>Bloc Jams</h1>
          </div>
          <div className="spacer" />
          <div className="navbar-nav-items">
            <ul>
              <li><Link to='/'>Landing</Link></li>
              <li><Link to='/library'>Library</Link></li>
            </ul>
          </div>


        </nav>
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
