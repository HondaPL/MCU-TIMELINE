import React, { Component } from 'react';
import './App.css';
import Timeline from './components/Timeline';
import mcu from './data/data.js'
import upcoming from './data/upcoming.js'
import logo from './data/logo.jpeg';

class App extends Component {

  state = {
    timelineData: mcu,
    upcoming: upcoming,
  }

  render() {
    return (
      <div className="App">
        <img className="logo" src={logo} alt="siema" />
        <Timeline data={this.state.timelineData} />
        <h1>Upcoming</h1>
        <Timeline data={this.state.upcoming} />
      <p className="credits">Created by Adam Hącia 2021</p>
      </div>
    );
  }
}

export default App;