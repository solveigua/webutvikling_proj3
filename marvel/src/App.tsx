import React from "react";
import {BrowserRouter, NavLink, Route, Redirect} from "react-router-dom";
import './App.css';
import Main from "./pages/Main";

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <ul className= "header"></ul>
        <div className="app-container">
          <div className="content">
            <Route exact path = "/" component={Main}/>
            <Redirect to = "/"/>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
//mulig vi ikke trenger å ha med 
export default App;
