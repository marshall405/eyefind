import React from 'react';
import {
  Route
} from 'react-router-dom';
import './App.css';

import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import MediaAndEntertainment from "./components/MediaAndEntertainment";
import FoodAndDrink from "./components/FoodAndDrink";
import MoneyAndServices from "./components/MoneyAndServices";
import TravelAndTransport from "./components/TravelAndTransport";
import FashionAndHealth from "./components/FashionAndHealth";
import Place from "./components/Place";
function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />

      <div className="main">
        <Route exact path="/" component={Home} />
        <Route exact path="/media" component={MediaAndEntertainment} />
        <Route exact path="/entertainment" component={MediaAndEntertainment} />
        <Route exact path="/victual" component={FoodAndDrink} />
        <Route exact path="/financials" component={MoneyAndServices} />
        <Route exact path="/travel" component={TravelAndTransport} />
        <Route exact path="/personal" component={FashionAndHealth} />

        <Route exact path="/*/:id" component={Place} />
      </div>
    </div>
  );
}

export default App;
