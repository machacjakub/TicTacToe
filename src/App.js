import './App.css';
import React from 'react';
import Explore from './components/Explore';
import PvP from './components/PvP';
import PvC from './components/PvC';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import ErrorPage from './pages/ErrorPage';
import logo from './components/img/logo.png'
import about from './components/img/about.png'

export default function App() {
  return (
    <>
    <Router>
      <nav>
          <Link to="/"> <img className='logo' src={logo} width="100px" height="100px" alt='homepage'/></Link>
          <Link to="/about" className='about'><img src={about} width="40px" height="40px" alt='about'/></Link>
        </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/explore" element={<Explore/>}/>
        <Route path="/pvp" element={<PvP/>}/>
        <Route path="/singleplayer" element={<PvC/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
      <footer className='center'>Created by curiosity with a help of beginner's mind</footer>
    </Router>
    
    </>
  );
}
