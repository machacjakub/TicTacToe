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
          <Link to="/TicTacToe/"> <img className='logo' src={logo} width="100px" height="100px" alt='homepage'/></Link>
          <Link to="/TicTacToe/about" className='about'><img src={about} width="40px" height="40px" alt='about'/></Link>
        </nav>
      <Routes>
        <Route path="/TicTacToe/" element={<Home/>}/>
        <Route path="/TicTacToe/about" element={<About/>}/>
        <Route path="/TicTacToe/explore" element={<Explore/>}/>
        <Route path="/TicTacToe/pvp" element={<PvP/>}/>
        <Route path="/TicTacToe/singleplayer" element={<PvC/>}/>
        <Route path="/TicTacToe/*" element={<ErrorPage/>}/>
      </Routes>
      <footer className='center'>Created by curiosity with a help of beginner's mind</footer>
    </Router>
    
    </>
  );
}
