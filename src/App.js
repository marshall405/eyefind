import React from 'react';
import {
  Route
} from 'react-router-dom';
import './App.css';

import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import MediaAndEntertainment from "./components/MediaAndEntertainment";
function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />

      <Route exact path="/" component={Home} />
      <Route exact path="/media" component={MediaAndEntertainment} />
      <Route exact path="/entertainment" component={MediaAndEntertainment} />

    </div>
  );
}

export default App;
