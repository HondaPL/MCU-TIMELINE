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

  handleFilter = () => alert("Filter to be added")

  top = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  bottom = () => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });


  render() {
    return (
      <div className="App">
        <div className="logoBox">
          <img onClick={this.top} className="logo" src={logo} alt="siema" />
          <ul class="horizontal_menu">
            <li><span onClick={this.handleFilter} className="filter">MOVIES</span></li>
            <li><span onClick={this.handleFilter} className="filter">SERIES</span></li>
            <li><span onClick={this.handleFilter} className="filter">SHORTS</span></li>
            <li><span onClick={this.handleFilter} className="filter">INTERNET</span></li>
          </ul>
        </div>
        <Timeline data={this.state.timelineData} />
        <h1>Upcoming</h1>
        <Timeline data={this.state.upcoming} />
        <div className="creditsBox">
          <p onClick={this.bottom} className="credits">Created by Adam Hącia 2021</p>
        </div>
      </div>
    );
  }
}

export default App;