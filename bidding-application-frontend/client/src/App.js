import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import AboutUs from "./components/AboutUs";
import Register from "./components/Register";
import Footer from "./components/Footer";
import AddSport from "./components/AddSport";
import AddTeam from "./components/AddTeam";
import CreateMatch from "./components/CreateMatch";
import MatchDetails from "./components/MatchDetails";
import BidForTheMatch from "./components/BidForTheMatch";
import AllTeams from "./components/AllTeams";
import AllSports from "./components/AllSports";
import AllMatches from "./components/AllMatches";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route path="/" component={Login} exact />
          <Route path="/home" component={Home} exact />
          <Route path="/register" component={Register} exact />
          <Route path="/about-us" component={AboutUs} exact />
          <Route path="/add-sport" component={AddSport} exact />
          <Route path="/add-team" component={AddTeam} exact />
          <Route path="/create-match" component={CreateMatch} exact />
          <Route path="/match-details/:id" component={MatchDetails} exact />
          <Route path="/bid-for-the-match/:id" component={BidForTheMatch} exact />
          <Route path="/all-teams" component={AllTeams} exact />
          <Route path="/all-sports" component={AllSports} exact />
          <Route path="/all-matches" component={AllMatches} exact />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
