import './App.css';
import React, { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom'

//Componentes
import NavBar from './components/NavBar';
import People from './components/People';
import Planets from './components/Planets';
import Vehicles from './components/Vehicles'
import Favorites from './components/Favorites';

function App() {

  const [people, setPeople] = useState([]);
  const [planet, setPlanets] = useState([]);
  const [vehicle, setVehicles] = useState([]);
  const [favorite, setFavorites] = useState ([]);


  const fetchPeople = () => {

    fetch('https://swapi.dev/api/people')

      .then(res => res.json())
      .then(data => setPeople(data.results))
      .catch(err => console.error(err))
  }

  const fetchPlanets = () => {

    fetch('https://swapi.dev/api/planets')

      .then(res => res.json())
      .then(data => setPlanets	(data.results))
      .catch(err => console.error(err))
  }

  const fetchVehicles = () => {

    fetch('https://swapi.dev/api/vehicles')

      .then(res => res.json())
      .then(data => setVehicles	(data.results))
      .catch(err => console.error(err))
  }



  useEffect(() => {
    fetchPeople();
    fetchPlanets();
    fetchVehicles();
  }, [])

 
  const addtoFavorites =(id) =>{
 
     if (!favorite.includes(id)) setFavorites(favorite.concat(id));
    console.log(id);

  }
 

  return (
    <div className='App'>
      <h1>STAR WARS API</h1>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path='/people'>
            <People data={people} 

            add={addtoFavorites}

            />
          </Route>
          <Route exact path='/planets'>
            <Planets data={planet}/>
          </Route>
          <Route exact path='/vehicles'>
            <Vehicles data={vehicle}/>
          </Route>
          <Route exact path='/favorites'>
            <Favorites />
          </Route>

        </Switch>

      </BrowserRouter>
    </div>

  );
}

export default App;




