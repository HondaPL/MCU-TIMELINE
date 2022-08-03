/* eslint-disable react/no-direct-mutation-state */
import { Component } from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import './Styles/App.css';
import Timeline from './components/Timeline';
import logo from './data/logo.jpeg';
import { animateScroll as scroll } from "react-scroll";
import mcu from './data/data'
import ssu from './data/ssuData'
import xmen from './data/xmenData'
import asm from './data/ASM'
import spiderVerse from './data/spiderVerse'

import Navbar from './components/Navbar'

class App extends Component {

  state = {
    mcuData: "",
    ssuData: "",
    xmenData: "",
    asmData: "",
    spiderVerse: "",
    filters: ["MOVIE", "SERIES", "SHORT", "INTERNET"],
    sortByPremiere: false
  }

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  scrollToBottom = () => {
    if (document.getElementById("upcoming"))
      scroll.scrollTo(document.getElementById("upcoming").offsetTop - document.getElementById("logobox").scrollHeight / 2.5)
  };

  handleFilter = type => {
    if (document.getElementById(type).style.color === "gray") {
      this.setState(
        {
          filters: [...this.state.filters, type]
        }
      )
      document.getElementById(type).style.color = ""
    } else {
      this.setState(
        {
          filters: this.state.filters.filter((item) => item !== type)
        }
      )
      document.getElementById(type).style.color = "gray"
    }
  };

  handleSorting = (sort1, sort2) => {

    if (sort1 === "premiere-filter") {
      this.setState(
        {
          sortByPremiere: true
        }
      )
    } else {
      this.setState(
        {
          sortByPremiere: false
        }
      )
    }
    document.getElementById(sort1).style.color = "black"
    document.getElementById(sort1).style.backgroundColor = "rgb(255, 255, 255)"

    document.getElementById(sort2).style.color = "#ffffff"
    document.getElementById(sort2).style.backgroundColor = "#000000"

  }

  componentDidMount() {
    this.setState({ mcuData: mcu, ssuData: ssu, xmenData: xmen, asmData: asm, spiderVerse: spiderVerse });
  }

  render() {
    let { filters, sortByPremiere } = this.state;

    return (
      <div className="App">
        <div id="logobox" className="logoBox">
          <Navbar />
          <img onClick={this.scrollToTop} className="logo" src={logo} alt="error" />
          <p>
            <button onClick={() => this.handleSorting("timeline-filter", "premiere-filter")} id="timeline-filter" className="bn3 bn3-active">Chronology</button>
            <button onClick={() => this.handleSorting("premiere-filter", "timeline-filter")} id="premiere-filter" className="bn3">Premiere</button>
          </p>
          <ul className="horizontal_menu">
            <li><span onClick={() => this.handleFilter("MOVIE")} id="MOVIE" className="filter">MOVIE</span></li>
            <li><span onClick={() => this.handleFilter("SERIES")} id="SERIES" className="filter">SERIES</span></li>
            <li hidden={true}><span hidden={true} onClick={() => this.handleFilter("LIMITED SERIES")} id="LIMITED SERIES" className="filter">LIMITED SERIES</span></li>
            <li><span onClick={() => this.handleFilter("SHORT")} id="SHORT" className="filter">SHORTS</span></li>
            <li><span onClick={() => this.handleFilter("INTERNET")} id="INTERNET" className="filter">INTERNET</span></li>
          </ul>
        </div>
        <Routes>

          <Route path="/ssu" element={<>{sortByPremiere
            ? <> <span></span> <Timeline id="timeline" data={this.state.ssuData} filter={filters} sortByPremiere={sortByPremiere} /> </>
            : <> <span></span> <Timeline id="timeline" data={this.state.ssuData} filter={filters} /></>}
            {filters && filters.length > 0 ?
              <h1 id="upcoming">Upcoming</h1> : <h1 id="upcoming">Come on! You hid all items. What did you expect?</h1>}
            <> <span></span> <Timeline data={this.state.ssuData} filter={filters} upcoming="yes" /> </>
          </>} />

          <Route path="/asm" element={<>{sortByPremiere
            ? <> <span></span> <Timeline id="timeline" data={this.state.asmData} filter={filters} sortByPremiere={sortByPremiere} /> </>
            : <> <span></span> <Timeline id="timeline" data={this.state.asmData} filter={filters} /></>}
            {filters && filters.length > 0 ?
              <h1 id="upcoming">Upcoming</h1> : <h1 id="upcoming">Come on! You hid all items. What did you expect?</h1>}
            <> <span></span> <Timeline data={this.state.asmData} filter={filters} upcoming="yes" /> </>
          </>} />

          <Route path="/xmen" element={<>{sortByPremiere
            ? <> <span></span> <Timeline id="timeline" data={this.state.xmenData} filter={filters} sortByPremiere={sortByPremiere} /> </>
            : <> <span></span> <Timeline id="timeline" data={this.state.xmenData} filter={filters} /></>}
            {filters && filters.length > 0 ?
              <h1 id="upcoming"> </h1> : <h1 id="upcoming">Come on! You hid all items. What did you expect?</h1>}
          </>} />

          <Route path="/spiderverse" element={<>{sortByPremiere
            ? <> <span></span> <Timeline id="timeline" data={this.state.spiderVerse} filter={filters} sortByPremiere={sortByPremiere} /> </>
            : <> <span></span> <Timeline id="timeline" data={this.state.spiderVerse} filter={filters} /></>}
            {filters && filters.length > 0 ?
              <h1 id="upcoming">Upcoming</h1> : <h1 id="upcoming">Come on! You hid all items. What did you expect?</h1>}
            <> <span></span> <Timeline data={this.state.spiderVerse} filter={filters} upcoming="yes" /> </>
          </>} />

          <Route path="*" element={<>{sortByPremiere
            ? <Timeline id="timeline" data={this.state.mcuData} filter={filters} sortByPremiere={sortByPremiere} />
            : <>  <Timeline id="timeline" data={this.state.mcuData} filter={filters} /></>}
            {filters && filters.length > 0 ?
              <h1 id="upcoming">Upcoming</h1> : <h1 id="upcoming">Come on! You hid all items. What did you expect?</h1>}
            <Timeline data={this.state.mcuData} filter={filters} upcoming="yes" />
          </>} />

        </Routes>

        <div className="creditsBox">
          <p onClick={this.scrollToBottom} className="credits">Created by Adam Hącia 2021,<a href="https://hondapl-mcu-api.herokuapp.com/">API</a></p>
        </div>
      </div>
    );
  }
}

export default App;