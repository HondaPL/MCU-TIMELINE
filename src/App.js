import React, { Component } from 'react';
import './App.css';
import Timeline from './components/Timeline';
import mcu from './data/data.js'
import logo from './data/logo.jpeg';

class App extends Component {

  state = {
    timelineData: mcu
  }

  render() {
    return (
      <div className="App">
        <img className="logo" src={logo} alt="siema" />
        {/* <button>MCU</button> */}
        {/* <button>FOX</button> */}
        {/* <button>DCEU</button> */}
        <Timeline data={this.state.timelineData} />
      <p className="credits">Created by Adam Hącia 2021</p>
      </div>
    );
  }
}

export default App;