import React, { Component } from "react";
import { Container, Col, Form, FormGroup, Label, Input, Button, Alert } from "reactstrap";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import Header from "./Header";

class AllTeams extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: []
    };
  }

  componentDidMount = () => {
    let requestOptions = {
      method: "GET",
      url: "http://localhost:5000/api/team/get"
    };

    axios(requestOptions).then(res => {
      if (res.status === 200) {
        this.setState({
          teams: res.data
        });
      }
      console.log(res.data);
    });
  };

  render() {
    return (
      <div>
        <Header />
        <Container className="border mt-5 mb-5">
          <h1 className="mt-5">
            <strong>All Teams</strong>
          </h1>
          {this.state.teams.length > 0 ? (
            <div>
              {this.state.teams.map(team => (
                <div>
                  <h2 className="mt-4 mb-2">
                    <strong>{team.name}</strong>
                  </h2>
                  <img src={require(`../../public/${team.image}`)} width="auto" height="200px" />
                  <div className="border-top mt-3"></div>
                </div>
              ))}
            </div>
          ) : (
            <p>No Teams to display</p>
          )}
        </Container>
      </div>
    );
  }
}

export default AllTeams;
