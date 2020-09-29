import React, { Component } from "react";
import { Container, Col, Form, FormGroup, Label, Input, Button, Alert } from "reactstrap";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import Header from "./Header";

class AllMatches extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matches: []
    };
  }

  componentDidMount = () => {
    let requestOptions = {
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
  };

  generate = id => {
    let requestOptions = {
      method: "POST",
      url: "http://localhost:5000/api/dream-team/generate-results",
      headers: {
        "x-auth-token": localStorage.getItem("auth-token"),
        "Content-Type": "application/json"
      },
      data: {
        id: id
      }
    };

    axios(requestOptions).then(res => {
      if (res.status === 200) {
        alert("Results have been generated successfully");
        location.reload();
      }
    });
  };

  render() {
    return (
      <div>
        <Header />
        <Container className="border mt-5 mb-5">
          <h1 className="mt-5">
            <strong>All matches</strong>
          </h1>
          {this.state.matches.length > 0 ? (
            <div>
              {this.state.matches.map(match => (
                <div>
                  <h2 className="mt-4 mb-2">
                    <strong>
                      {match.team_1_name} VS {match.team_2_name}
                    </strong>
                  </h2>
                  <Button style={{ backgroundColor: "#ad0000" }} className="mr-3">
                    View Details
                  </Button>
                  <Button onClick={() => this.generate(match._id)} style={{ backgroundColor: "#ad0000" }}>
                    Generate Results
                  </Button>
                  <div className="border-top mt-3"></div>
                </div>
              ))}
            </div>
          ) : (
            <p>No matches to display</p>
          )}
        </Container>
      </div>
    );
  }
}

export default AllMatches;
