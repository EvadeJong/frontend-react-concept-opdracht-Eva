import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Subreddit from './pages/subreddit/Subreddit';


function App() {

  return (
    <Router>
      <Header/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/subreddit/:subredditId">
            <Subreddit />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
