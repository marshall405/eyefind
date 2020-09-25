import React from 'react';

import './App.css';

import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
