/* eslint-disable react/no-direct-mutation-state */
import React, { Component } from 'react';
import './App.css';
import Timeline from './components/Timeline';
import logo from './data/logo.jpeg';
import { animateScroll as scroll } from "react-scroll";
import mcu from './data/data'

class App extends Component {

  state = {
    timelineData: "",
    filters: ["MOVIE", "SERIES", "SHORT", "INTERNET"]
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

  componentDidMount() {
    this.setState({ timelineData: mcu });

    //SERVER NEEDS TO BE FIXED

    // var axios = require("axios").default;

    // axios
    //     .get(
    //       "https://hondapl-mcu-api.herokuapp.com/mcu"
    //     )
    //     .then(res => res.data)
    //     .then(res => {
    //         this.setState({ timelineData: res });
    //     });

}

  render() {
    let { filters } = this.state;
    console.log(this.state.timelineData)
    return (
      <div className="App">
        <div id="logobox" className="logoBox">
          <img onClick={this.scrollToTop} className="logo" src={logo} alt="siema" />
          <ul class="horizontal_menu">
            <li><span onClick={() => this.handleFilter("MOVIE")} id="MOVIE" className="filter">MOVIE</span></li>
            <li><span onClick={() => this.handleFilter("SERIES")} id="SERIES" className="filter">SERIES</span></li>
            <li hidden={true}><span hidden={true} onClick={() => this.handleFilter("LIMITED SERIES")} id="LIMITED SERIES" className="filter">LIMITED SERIES</span></li>
            <li><span onClick={() => this.handleFilter("SHORT")} id="SHORT" className="filter">SHORTS</span></li>
            <li><span onClick={() => this.handleFilter("INTERNET")} id="INTERNET" className="filter">INTERNET</span></li>
          </ul>
        </div>
        <Timeline id="timeline" data={this.state.timelineData} filter={filters} />
        {filters && filters.length > 0 ? 
        <h1 id="upcoming">Upcoming</h1> : <h1 id="upcoming">Come on! You hid all items. What did you expect?</h1>}
        <Timeline data={this.state.timelineData} filter={filters} upcoming="yes"/>
        <div className="creditsBox">
          <p onClick={this.scrollToBottom} className="credits">Created by Adam Hącia 2021,<a href="https://hondapl-mcu-api.herokuapp.com/">API</a></p>
        </div>
      </div>
    );
  }
}

export default App;