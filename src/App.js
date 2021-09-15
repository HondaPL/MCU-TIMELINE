/* eslint-disable react/no-direct-mutation-state */
import React, { Component } from 'react';
import './App.css';
import Timeline from './components/Timeline';
import mcu from './data/data.js'
import upcoming from './data/upcoming.js'
import logo from './data/logo.jpeg';
import { animateScroll as scroll } from "react-scroll";

class App extends Component {

  state = {
    timelineData: mcu,
    upcoming: upcoming,
    filters: ["MOVIE", "SERIES", "SHORT", "INTERNET SERIES"]
  }

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  scrollToBottom = () => {
    if (document.getElementById("upcoming"))
      scroll.scrollTo(document.getElementById("upcoming").offsetTop - document.getElementById("logobox").scrollHeight)
  };

  handleFilter = type => {
    if (document.getElementById(type).style.color === "gray") {
      this.setState(
        {
          filters : [...this.state.filters, type]
        }
      )
      document.getElementById(type).style.color = ""
    } else {
      this.setState(
        {
          filters : this.state.filters.filter((item) => item !== type)
        }
      )
      document.getElementById(type).style.color = "gray" 
    }
  };



  render() {
    let { filters } = this.state;
    return (
      <div className="App">
        <div id="logobox" className="logoBox">
          <img onClick={this.scrollToTop} className="logo" src={logo} alt="siema" />
          <ul class="horizontal_menu">
            <li><span onClick={() => this.handleFilter("MOVIE")} id="MOVIE" className="filter">MOVIES</span></li>
            <li><span onClick={() => this.handleFilter("SERIES")} id="SERIES" className="filter">SERIES</span></li>
            <li><span onClick={() => this.handleFilter("SHORT")} id="SHORT" className="filter">SHORTS</span></li>
            <li><span onClick={() => this.handleFilter("INTERNET SERIES")} id="INTERNET SERIES" className="filter">INTERNET</span></li>
          </ul>
        </div>
        <Timeline id="timeline" data={this.state.timelineData} filter={filters} />
        {filters && filters.length > 0 ? 
        <h1 id="upcoming">Upcoming</h1> : <h1 id="upcoming">Come on! You hid all items. What did you expect?</h1>}
        <Timeline data={this.state.upcoming} filter={filters}/>
        <div className="creditsBox">
          <p onClick={this.scrollToBottom} className="credits">Created by Adam Hącia 2021</p>
          <p onClick={this.scrollToBottom} className="credits">Site last updated on September 16th, 2021</p>
        </div>
      </div>
    );
  }
}

export default App;