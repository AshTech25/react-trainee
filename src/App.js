import './App.css';
import Info from './components/route0/Info'
import {WelcomePage} from './components/route1/WelcomePage'

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

import {Provider} from 'react-redux'

import store from './components/store'

import React from 'react';

import {connect} from 'react-redux';



function App() {
  return (
  <Router>
  <Switch>
  <Provider store={store}>  
  <div className="App" >
      <Route path = '/' exact component={Info}/> 
      <Route path = '/welcome' component={WelcomePage}/> 
  </div>
  </Provider>
  </Switch>
  </Router>
  );
}

export default App;
