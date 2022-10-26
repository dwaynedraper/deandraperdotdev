import React from 'react';
import './App.css';
import Main from './components/Main/Main';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import AboutUs from './components/Main/AboutUs/AboutUs';
import Header from './components/Main/Header/Header';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Main>
        <Header />
        <AboutUs />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
