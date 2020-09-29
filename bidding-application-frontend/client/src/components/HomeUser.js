import React, { Component } from "react";
import { Container, Col, Form, FormGroup, Label, Input, Button, Alert } from "reactstrap";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import Header from "./Header";

class HomeUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetails: JSON.parse(localStorage.getItem("user-details")),
      noOfSports: [],
      noOfTeams: [],
      matches: [],
      results: []
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
      url: "http://localhost:5000/api/match/get"
    };

    axios(requestOptions).then(res => {
      if (res.status === 200) {
        this.setState({
          matches: res.data
        });
      }
      console.log(res.data);
    });

    requestOptions = {
      method: "POST",
      url: "http://localhost:5000/api/dream-team/results",
      headers: {
        "x-auth-token": localStorage.getItem("auth-token"),
        "Content-Type": "application/json"
      },
      data: {
        id: this.state.userDetails.id
      }
    };

    axios(requestOptions).then(res => {
      if (res.status === 200) {
        this.setState({
          results: res.data
        });
      }
      console.log(res.data);
    });
  };

  render() {
    return (
      <div>
        <Container className="border mt-5 p-5">
          <h1>
            <strong>Welcome {this.state.userDetails.name}</strong>
          </h1>
          {this.state.results.length > 0 ? (
            <Container className="border mt-3 mb-3 p-5">
              {this.state.results.map(result => (
                <div>
                  <h1>
                    <strong>Congratulations!!!</strong>
                  </h1>
                  <h3>
                    <strong>You've won Rs.{result.total_amount_won.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</strong>
                  </h3>
                </div>
              ))}
            </Container>
          ) : (
            ""
          )}
          <Link to="/match-index" style={{ color: "#FFF", textDecoration: "none" }}>
            <Button style={{ backgroundColor: "#ad0000" }} className="mt-3 mr-3">
              Matches ({this.state.matches.length})
            </Button>
          </Link>
          <Link to="/sports-index" style={{ color: "#FFF", textDecoration: "none" }}>
            <Button style={{ backgroundColor: "#ad0000" }} className="mt-3 mr-3">
              Sports ({this.state.noOfSports})
            </Button>
          </Link>
          <Link to="/team-index" style={{ color: "#FFF", textDecoration: "none" }}>
            <Button style={{ backgroundColor: "#ad0000" }} className="mt-3">
              Teams ({this.state.noOfTeams})
            </Button>
          </Link>
        </Container>
        <Container className="border mt-5 p-5">
          <h1 className="mb-3">
            <strong>Upcoming Matches</strong>
          </h1>
          {this.state.matches.length > 0 ? (
            <div>
              {this.state.matches.map((match, index) => (
                <Container className="mb-3">
                  <h3>
                    <strong>
                      <Link to={`/match-details/${match._id}`} style={{ color: "black", textDecoration: "none" }}>
                        {match.team_1_name} VS {match.team_2_name}
                      </Link>
                    </strong>
                  </h3>
                  <p>Sport: {match.sport_name}</p>
                  {index < this.state.matches.length - 1 ? <div className="border-top"></div> : ""}
                </Container>
              ))}
            </div>
          ) : (
            <p>No Matches to display</p>
          )}
        </Container>
      </div>
    );
  }
}

export default HomeUser;
