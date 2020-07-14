import React from 'react';

import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Switch, Route } from 'react-router-dom'
import { Home } from './components/HomePage/HomePage';
import { HeroInfoPage } from './components/HeroInfoPage/HeroInfoPage';
import { Footer } from './components/Footer/Footer';


function App() {
  return (
    <div className='page-container'>
      <div className='content'>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/hero-info/:id" component={HeroInfoPage} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;