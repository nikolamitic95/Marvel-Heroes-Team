import React from 'react';
import './App.css';
import {Home} from './components/HomePage/HomePage';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import { Switch, Route } from 'react-router-dom'
import {HeroInfo} from './components/HeroInfo/HeroInfo';

function App() {
  return (
    <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/hero-info/:id" component={HeroInfo} />
        </Switch>
      </div>
  );
}

export default App;
