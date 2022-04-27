import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { useSelector } from "react-redux";
import Login from "./Components/Login";

function App() {
  let props = {
    imageUrl:"/js.com",
    imageText:"food"
    };
  const mystate= useSelector((state)=>state.controlClick);
  return (
    <div className="App">
    <Router>
      <Routes >
        <Route exact path="/" element={<Login {...props}/>}/>
        <Route path="/home" element={<><Header/><Home/></>}/>

      </Routes >
    </Router>
     {/* Lets build the linkedin */}
    </div>
  );
}

export default App;
