import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Main from './components/Main/Main';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import AboutUs from './components/Main/AboutUs/AboutUs';
import Header from './components/Main/Header/Header';
import Skills from './components/Main/Skills/Skills';
import ShowingOff from './components/Main/ShowingOff/ShowingOff';
import ContactMe from './components/Main/ContactMe/ContactMe';
import Resume from './components/Main/Resume/Resume';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Main>
          <Switch>
            <Route path="/contact-me">
              <ContactMe />
            </Route>
            <Route path="/showcase">
              <ShowingOff />
            </Route>
            <Route path="/resume">
              <Resume />
            </Route>
            <Route exact path="/">
              <Header />
              <Skills />
              <AboutUs />
            </Route>
          </Switch>
        </Main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
