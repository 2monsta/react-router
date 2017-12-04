import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// add the react router, BrowserRouter as Router is the main component
// link is the new <a href=""></a>. react will convert link tag into an a tag that is safe
// think of route like router.get, what to do when the user come to this route
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import About from './component/About';
import Home from './component/Home';
import Topics from './component/Topics';
import Movies from './component/Movies';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/*a tags are bad now*/}
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/topics">Topics</Link></li>
            <li><Link to={"/movies"}>Movies</Link></li>
          </ul>
          {/*if you only want to match the exact path, use exact*/}
          <Route exact path={"/"} render={()=>
            (<Home title={"Home page"} teams={["pats", "Falcons", "vikings"]}/>
            )}/>
          <Route path={"/about"} component={About}/>
          <Route path={"/topics"} component={Topics}/>
          <Route path={"/movies"} component={Movies}/>
        </div>
      </Router>
    );
  }
}

export default App;
