import React, { Fragment, useState } from "react";
import {BrowserRouter, NavLink, Route, Redirect} from "react-router-dom"; //it is easiest to just update our page (i think) then to redirect
import './App.css';
import Header from './components/Layout/Header';
import Movies from "./components/Movies/Movies";
import Search from "./components/Search/Search";
import SearchProvider from "./store/SearchProvider";
import Searchbar from "./components/Search/Searchbar";
import store from './store';
import {Provider} from 'react-redux';

function App() {
  const [searchIsShown, setSearchIsShown] =useState<Boolean>(false);

  const showSearchHandler = () => {
    setSearchIsShown(true);
  };

  const hideSearchHandler = () => {
    setSearchIsShown(false);
  }

  //FROM TUTORIAL: used searchprovider as wrapper as it affectrs everything - can use Fragments instead. Check how it works with redux/mobux
  return (
  <div className="container">
    <Header/>
    <main>
      <Movies/>
      </main>
      </div>
  );
}

export default App;
