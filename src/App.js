import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import TestApi from './TestApi';

class App extends Component{
  render(){
    return(
      <Router>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="">Nyoba React</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <Link to={'/'} className="nav-link">Home</Link>
                </li>
                <li class="nav-item">
                    <Link to={'/Login'} className="nav-link">Login</Link>
                </li>
                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Test Api
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a class="dropdown-item">
                      <Link to={'/TestApi'} className="nav-link">Test Api</Link>
                    </a>
                    <a class="dropdown-item" href="#">Comment</a>
                </div>
                </li>
            </ul>
            </div>
        </nav>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/Login' component={Login} />
            <Route path='/TestApi' component={TestApi} />
        </Switch>
      </Router>
    );
  }
}
export default App;

