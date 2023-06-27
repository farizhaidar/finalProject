import React from 'react';
import Navbar from './Components/Navbar';
import "./style.css";
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element= {<Home/> }></Route>
        <Route path="/About" element= {<About/> }></Route>
      </Routes>
    </div>
    
  );
}

export default App;
