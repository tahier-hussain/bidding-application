import React, { Component } from "react";
import { Container, Col, Form, FormGroup, Label, Input, Button, Alert } from "reactstrap";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";

class HomeAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetails: JSON.parse(localStorage.getItem("user-details")),
      noOfSports: "",
      noOfTeams: "",
      noOfMatches: ""
    };
  }
  componentDidMount = () => {
    let requestOptions = {
      method: "GET",
      url: "http://localhost:5000/api/sport/get-number-of-sports",
      headers: {
        "x-auth-token": localStorage.getItem("auth-token")
      }
    };

    axios(requestOptions).then(res => {
      if (res.status === 200) {
        this.setState({
          noOfSports: res.data
        });
      }
    });

    requestOptions = {
      method: "GET",
      url: "http://localhost:5000/api/team/get-number-of-teams",
      headers: {
        "x-auth-token": localStorage.getItem("auth-token")
      }
    };

    axios(requestOptions).then(res => {
      if (res.status === 200) {
        this.setState({
          noOfTeams: res.data
        });
      }
    });

    requestOptions = {
      method: "GET",
      url: "http://localhost:5000/api/match/get-number-of-matches",
      headers: {
        "x-auth-token": localStorage.getItem("auth-token")
      }
    };

    axios(requestOptions).then(res => {
      if (res.status === 200) {
        this.setState({
          noOfMatches: res.data
        });
      }
    });
  };

  render() {
    return (
      <div>
        <Container className="border mt-5 p-5">
          <h1>
            <strong>Admin: {this.state.userDetails.name}</strong>
          </h1>
          <h2 className="mt-3">
            <strong>Total Sports: {this.state.noOfSports}</strong>
          </h2>
          <Link to="/all-sports" style={{ color: "#FFF", textDecoration: "none" }}>
            <Button style={{ backgroundColor: "#ad0000" }}>See All Sports</Button>
          </Link>{" "}
          <h2 className="mt-3">
            <strong>Total Teams: {this.state.noOfTeams}</strong>
          </h2>
          <Link to="/all-teams" style={{ color: "#FFF", textDecoration: "none" }}>
            <Button style={{ backgroundColor: "#ad0000" }}>See All Teams</Button>
          </Link>
          <h2 className="mt-3">
            <strong>Total Matches: {this.state.noOfMatches}</strong>
          </h2>
          <Link to="/all-matches" style={{ color: "#FFF", textDecoration: "none" }}>
            <Button style={{ backgroundColor: "#ad0000" }}>See All Matches</Button>
          </Link>{" "}
          <p></p>
          <Link to="/create-match" style={{ color: "#FFF", textDecoration: "none" }}>
            <Button style={{ backgroundColor: "#ad0000" }} className="mt-3 mr-3">
              Create Match
            </Button>
          </Link>
          <Link to="/add-team" style={{ color: "#FFF", textDecoration: "none" }}>
            <Button style={{ backgroundColor: "#ad0000" }} className="mt-3 mr-3">
              Add Team
            </Button>
          </Link>
          <Link to="/add-sport" style={{ color: "#FFF", textDecoration: "none" }}>
            <Button style={{ backgroundColor: "#ad0000" }} className="mt-3">
              Add Sport
            </Button>
          </Link>
        </Container>
      </div>
    );
  }
}

export default HomeAdmin;
