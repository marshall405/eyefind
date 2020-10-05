import React, { useState } from 'react';
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
  const [home, setHome] = useState([])
  const [media, setMedia] = useState([])
  const [victual, setVictual] = useState([])
  const [financials, setFinancials] = useState([])
  const [travel, setTravel] = useState([])
  const [personal, setPersonal] = useState([])

  return (
    <div className="App">
      <Header />
      <NavBar />

      <div className="main">

        <Route exact path="/" render={() => <Home setPlaces={setHome} places={home} />} />
        <Route exact path="/media" render={() => <MediaAndEntertainment setPlaces={setMedia} places={media} />} />
        <Route exact path="/entertainment" render={() => <MediaAndEntertainment setPlaces={setMedia} places={media} />} />
        <Route exact path="/victual" render={() => <FoodAndDrink setPlaces={setVictual} places={victual} />} />
        <Route exact path="/financials" render={() => <MoneyAndServices setPlaces={setFinancials} places={financials} />} />
        <Route exact path="/travel" render={() => <TravelAndTransport setPlaces={setTravel} places={travel} />} />
        <Route exact path="/personal" render={() => <FashionAndHealth setPlaces={setPersonal} places={personal} />} />

        <Route exact path="/*/:id" component={Place} />
      </div>
    </div>
  );
}

export default App;
