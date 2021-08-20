import React, {useState} from 'react';
import Navbar from './components/Navbar.js';
import About from './components/About.js';
import Home from './Home.js';
import Newman from './components/profiles/newman.js'
import Zanders from './components/profiles/zanders.js'
import PracticeArea from './components/practice-areas.js'
import Criminal from './components/areas/criminal.js'
import Family from './components/areas/family.js'
import Gallery from './components/gallery.js'
import Contact from './components/contact.js'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ScrollTop from './scrollTop.js'


const App = () => {


  return(
    <Router>
      <ScrollTop/>
      <div className="App">
      <div className="content">
        <Switch> 
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route  path="/about/jarahn-newman">
            <Newman/>
          </Route>
          <Route  path="/about/marvin-zanders">
            <Zanders/>
          </Route>
          <Route exact path="/practice-areas">
            <PracticeArea/>
          </Route>
          <Route path="/practice-areas/criminal-law">
            <Criminal/>
          </Route>
          <Route path="/practice-areas/family-law">
            <Family/>
          </Route>
          <Route path="/gallery">
            <Gallery/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
        </Switch>
      </div>
      </div>
    </Router>
  )
}


export default App
