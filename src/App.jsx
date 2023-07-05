import React from 'react';
import Navbar from './Components/Navbar';
import "./style/style.css" ;
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import TikTalks from './pages/TikTalks';
import Members from './pages/Members';

function App() {
  return (
    <div className="App">

      <Navbar/>
      <Routes>
        <Route path="/" element= {<Home/> }></Route>
        <Route path="/TikTalks" element= {<TikTalks/> }></Route>
        <Route path="/About" element= {<About/> }></Route>
        <Route path="/Members" element= {<Members/> }></Route>
      </Routes>

    </div>
    
  );
}

export default App;
