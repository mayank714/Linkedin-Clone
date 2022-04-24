import {
  BrowserRouter as Router,
  Routes ,
  Route,
  // Link
} from "react-router-dom";
import React from 'react';
import './App.css';
import Login from './Components/Login'
import Home from './Components/Home'
import Header from './Components/Header'

function App() {
  return (
    <div className="App">
    <Router>
      <Routes >
        <Route exact path="/" element={<Login/>}/>
        <Route path="/home" element={<><Header/><Home/></>}/>

      </Routes >
    </Router>
     {/* Lets build the linkedin */}
    </div>
  );
}

export default App;
