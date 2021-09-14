import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import newGames from "./newGames";
import Contact from "./Contact";
import bestSellers from "./bestSellers";
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
        <nav>
          <h1>It Takes Two</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/newgames">New Games</NavLink></li>
            <li><NavLink to="/bestsellers">Best Sellers</NavLink></li>
            <li><NavLink to="/contact">Come Visit Us!</NavLink></li>
          </ul>
          <div className="content">
              <Route exact path="/" component={Home}/>
              <Route path="/login" component={Login}/>
              <Route path="/newgames" component={newGames}/>
              <Route path="/bestsellers" component={bestSellers}/>
              <Route path="/contact" component={Contact}/>
             
          </div>
          </nav>
        </HashRouter>
    );
  }
}
 
export default Main;