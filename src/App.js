import React, { Component } from 'react';
import './App.css';
import Timeline from './components/Timeline';
import mcu from './data/data.js'

class App extends Component {

  state = {
    timelineData: mcu
  }

  render() {
    return (
      <div className="App">
        <h1>MCU TIMELINE</h1>
        {/* <button>MCU</button> */}
        {/* <button>FOX</button> */}
        {/* <button>DCEU</button> */}
        <Timeline data={this.state.timelineData} />
      </div>
    );
  }
}

export default App;