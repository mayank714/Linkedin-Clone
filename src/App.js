import {useEffect} from "react";
// import {connect } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { connect, useSelector } from "react-redux";
import Login from "./Components/Login";
import {getUserAuth }from './actions';

function App(props) {
  useEffect(()=>{
    props.getUserAuth();
  },[])
  const mystate= useSelector((state)=>state.controlClick);
  return (
    <div className="App">
    <Router>
      <Routes >
        <Route exact path="/" element={<Login />}/>
        <Route path="/home" element={<><Header/><Home/></>}/>

      </Routes >
    </Router>
     {/* Lets build the linkedin */}
    </div>
  );
}

const MapStatetoProps=(state)=>{
  return {};
}
const MapDipatchtoProps=(dispatch)=>({
  getUserAuth :()=>dispatch(getUserAuth())
})
export default connect(MapStatetoProps,MapDipatchtoProps)(App);
// export default ;
