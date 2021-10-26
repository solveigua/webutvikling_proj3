import React, { Fragment, useState } from "react";
import {BrowserRouter, NavLink, Route, Redirect} from "react-router-dom";
import './App.css';
import Header from './components/Layout/Header';
import Movies from "./components/Movies/Movies";
import Search from "./components/Search/Search";
import SearchProvider from "./store/SearchProvider";

function App() {
  const [searchIsShown, setSearchIsShown] =useState<Boolean>(false);

  const showSearchHandler = () => {
    setSearchIsShown(true);
  };

  const hideSearchHandler = () => {
    setSearchIsShown(false);
  }


  return (
    <SearchProvider>
      {searchIsShown && <Search onClose={hideSearchHandler}/>}
      <Header onShowSearch={showSearchHandler}/>
      <main>
        <Movies/>
      </main>
    </SearchProvider>
  );
}

export default App;
