import React, { Component } from "react";
import { Container, Col, Row, Form, FormGroup, Label, Input, Button, Alert } from "reactstrap";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import Header from "./Header";

let player_1_team_1;
let player_2_team_1;
let player_3_team_1;
let player_4_team_1;
let player_5_team_1;
let player_6_team_1;
let player_7_team_1;
let player_8_team_1;
let player_9_team_1;
let player_10_team_1;
let player_11_team_1;
let player_1_team_2;
let player_2_team_2;
let player_3_team_2;
let player_4_team_2;
let player_5_team_2;
let player_6_team_2;
let player_7_team_2;
let player_8_team_2;
let player_9_team_2;
let player_10_team_2;
let player_11_team_2;
class MatchDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      match: {},
      id: ""
    };
  }

  componentDidMount = () => {
    const {
      match: { params }
    } = this.props;

    this.setState({
      id: params.id
    });

    let requestOptions = {
      method: "POST",
      url: "http://localhost:5000/api/match/get-single-match",
      headers: {
        "x-auth-token": localStorage.getItem("auth-token"),
        "Content-Type": "application/json"
      },
      data: {
        id: params.id
      }
    };

    axios(requestOptions).then(res => {
      if (res.status === 200) {
        player_1_team_1 = res.data.player_1_team_1.name;
        player_2_team_1 = res.data.player_2_team_1.name;
        player_3_team_1 = res.data.player_3_team_1.name;
        player_4_team_1 = res.data.player_4_team_1.name;
        player_5_team_1 = res.data.player_5_team_1.name;
        player_6_team_1 = res.data.player_6_team_1.name;
        player_7_team_1 = res.data.player_7_team_1.name;
        player_8_team_1 = res.data.player_8_team_1.name;
        player_9_team_1 = res.data.player_9_team_1.name;
        player_10_team_1 = res.data.player_10_team_1.name;
        player_11_team_1 = res.data.player_11_team_1.name;
        player_1_team_2 = res.data.player_1_team_2.name;
        player_2_team_2 = res.data.player_2_team_2.name;
        player_3_team_2 = res.data.player_3_team_2.name;
        player_4_team_2 = res.data.player_4_team_2.name;
        player_5_team_2 = res.data.player_5_team_2.name;
        player_6_team_2 = res.data.player_6_team_2.name;
        player_7_team_2 = res.data.player_7_team_2.name;
        player_8_team_2 = res.data.player_8_team_2.name;
        player_9_team_2 = res.data.player_9_team_2.name;
        player_10_team_2 = res.data.player_10_team_2.name;
        player_11_team_2 = res.data.player_11_team_2.name;
        this.setState({
          match: res.data
        });
      }
      console.log(typeof this.state.match.player_1_team_1.name);
    });
  };
  render() {
    return (
      <div>
        <Header />
        <Container className="border p-5 mt-5 mb-5">
          <Link to={`/bid-for-the-match/${this.state.id}`} style={{ color: "#FFF", textDecoration: "none" }}>
            <Button style={{ backgroundColor: "#ad0000" }} className="p-3 mb-3">
              Bid for this Match
            </Button>
          </Link>
          <Row className="mb-5">
            <Container>
              <h2>
                <strong className="float-left">{this.state.match.team_1_name}</strong>
                <strong className="float-right">{this.state.match.team_2_name}</strong>
              </h2>
            </Container>
          </Row>
          <Row className="mb-3">
            <Container>
              <h3>
                <strong className="float-left">{player_1_team_1} (C)</strong>
                <strong className="float-right">{player_1_team_2} (C)</strong>
              </h3>
            </Container>
          </Row>
          <Row className="mb-3">
            <Container>
              <h3>
                <strong className="float-left">{player_2_team_1}</strong>
                <strong className="float-right">{player_2_team_2}</strong>
              </h3>
            </Container>
          </Row>
          <Row className="mb-3">
            <Container>
              <h3>
                <strong className="float-left">{player_3_team_1}</strong>
                <strong className="float-right">{player_3_team_2}</strong>
              </h3>
            </Container>
          </Row>
          <Row className="mb-3">
            <Container>
              <h3>
                <strong className="float-left">{player_4_team_1}</strong>
                <strong className="float-right">{player_4_team_2}</strong>
              </h3>
            </Container>
          </Row>
          <Row className="mb-3">
            <Container>
              <h3>
                <strong className="float-left">{player_5_team_1}</strong>
                <strong className="float-right">{player_5_team_2}</strong>
              </h3>
            </Container>
          </Row>
          <Row className="mb-3">
            <Container>
              <h3>
                <strong className="float-left">{player_6_team_1}</strong>
                <strong className="float-right">{player_6_team_2}</strong>
              </h3>
            </Container>
          </Row>
          <Row className="mb-3">
            <Container>
              <h3>
                <strong className="float-left">{player_7_team_1}</strong>
                <strong className="float-right">{player_7_team_2}</strong>
              </h3>
            </Container>
          </Row>
          <Row className="mb-3">
            <Container>
              <h3>
                <strong className="float-left">{player_8_team_1}</strong>
                <strong className="float-right">{player_8_team_2}</strong>
              </h3>
            </Container>
          </Row>
          <Row className="mb-3">
            <Container>
              <h3>
                <strong className="float-left">{player_9_team_1}</strong>
                <strong className="float-right">{player_9_team_2}</strong>
              </h3>
            </Container>
          </Row>
          <Row className="mb-3">
            <Container>
              <h3>
                <strong className="float-left">{player_10_team_1}</strong>
                <strong className="float-right">{player_10_team_2}</strong>
              </h3>
            </Container>
          </Row>
          <Row className="mb-3">
            <Container>
              <h3>
                <strong className="float-left">{player_11_team_1}</strong>
                <strong className="float-right">{player_11_team_2}</strong>
              </h3>
            </Container>
          </Row>
        </Container>
      </div>
    );
  }
}

export default MatchDetails;
