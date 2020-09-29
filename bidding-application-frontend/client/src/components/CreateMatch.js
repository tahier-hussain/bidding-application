import React, { Component } from "react";
import { Container, Col, Form, FormGroup, Label, Input, Button, Alert } from "reactstrap";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import Header from "./Header";

class CreateMatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sports: [],
      sport_name: "",
      sport_id: "",
      teams: [],
      team_1_name: "",
      team_1_id: "",
      team_2_name: "",
      team_2_id: "",
      player_1_team_1: "",
      player_2_team_1: "",
      player_3_team_1: "",
      player_4_team_1: "",
      player_5_team_1: "",
      player_6_team_1: "",
      player_7_team_1: "",
      player_8_team_1: "",
      player_9_team_1: "",
      player_10_team_1: "",
      player_11_team_1: "",
      player_1_team_2: "",
      player_2_team_2: "",
      player_3_team_2: "",
      player_4_team_2: "",
      player_5_team_2: "",
      player_6_team_2: "",
      player_7_team_2: "",
      player_8_team_2: "",
      player_9_team_2: "",
      player_10_team_2: "",
      player_11_team_2: "",
      player_1_team_1_base_price: "",
      player_2_team_1_base_price: "",
      player_3_team_1_base_price: "",
      player_4_team_1_base_price: "",
      player_5_team_1_base_price: "",
      player_6_team_1_base_price: "",
      player_7_team_1_base_price: "",
      player_8_team_1_base_price: "",
      player_9_team_1_base_price: "",
      player_10_team_1_base_price: "",
      player_11_team_1_base_price: "",
      player_1_team_2_base_price: "",
      player_2_team_2_base_price: "",
      player_3_team_2_base_price: "",
      player_4_team_2_base_price: "",
      player_5_team_2_base_price: "",
      player_6_team_2_base_price: "",
      player_7_team_2_base_price: "",
      player_8_team_2_base_price: "",
      player_9_team_2_base_price: "",
      player_10_team_2_base_price: "",
      player_11_team_2_base_price: ""
    };
  }

  componentDidMount = () => {
    let requestOptions = {
      method: "GET",
      url: "http://localhost:5000/api/sport/get"
    };

    axios(requestOptions).then(res => {
      if (res.status === 200) {
        this.setState({
          sports: res.data,
          sport_name: res.data[0].name,
          sport_id: res.data[0]._id
        });
        console.log(res.data);
      }
    });

    requestOptions = {
      method: "GET",
      url: "http://localhost:5000/api/team/get"
    };

    axios(requestOptions).then(res => {
      if (res.status === 200) {
        this.setState({
          teams: res.data,
          team_1_name: res.data[0].name,
          team_1_id: res.data[0]._id,
          team_2_name: res.data[0].name,
          team_2_id: res.data[0]._id
        });
        console.log(res.data);
      }
    });
  };

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  changeHandlerForFile = event => {
    this.setState({
      file: event.target.files[0]
    });
  };

  submitHandler = async event => {
    event.preventDefault();

    for (let i = 0; i < this.state.sports.length; i++) {
      if (await (this.state.sports[i].name.trim() === this.state.sport_name.trim())) {
        console.log("HELLO" + i);
        this.setState({
          sport_id: this.state.sports[i]._id
        });
      }
    }

    for (let i = 0; i < this.state.teams.length; i++) {
      if (await (this.state.teams[i].name.trim() === this.state.team_1_name.trim())) {
        this.setState({
          team_1_id: this.state.teams[i]._id
        });
      }
      if (await (this.state.teams[i].name.trim() === this.state.team_2_name.trim())) {
        this.setState({
          team_2_id: this.state.teams[i]._id
        });
      }
    }

    console.log(this.state.team_1_id);
    console.log(this.state.sport_id);
    const formData = new FormData();
    formData.append("sport_id", this.state.sport_id);
    formData.append("team_1_id", this.state.team_1_id);
    formData.append("team_2_id", this.state.team_2_id);
    formData.append("player_1_team_1", this.state.player_1_team_1);
    formData.append("player_2_team_1", this.state.player_2_team_1);
    formData.append("player_3_team_1", this.state.player_3_team_1);
    formData.append("player_4_team_1", this.state.player_4_team_1);
    formData.append("player_5_team_1", this.state.player_5_team_1);
    formData.append("player_6_team_1", this.state.player_6_team_1);
    formData.append("player_7_team_1", this.state.player_7_team_1);
    formData.append("player_8_team_1", this.state.player_8_team_1);
    formData.append("player_9_team_1", this.state.player_9_team_1);
    formData.append("player_10_team_1", this.state.player_10_team_1);
    formData.append("player_11_team_1", this.state.player_11_team_1);
    formData.append("player_1_team_2", this.state.player_1_team_2);
    formData.append("player_2_team_2", this.state.player_2_team_2);
    formData.append("player_3_team_2", this.state.player_3_team_2);
    formData.append("player_4_team_2", this.state.player_4_team_2);
    formData.append("player_5_team_2", this.state.player_5_team_2);
    formData.append("player_6_team_2", this.state.player_6_team_2);
    formData.append("player_7_team_2", this.state.player_7_team_2);
    formData.append("player_8_team_2", this.state.player_8_team_2);
    formData.append("player_9_team_2", this.state.player_9_team_2);
    formData.append("player_10_team_2", this.state.player_10_team_2);
    formData.append("player_11_team_2", this.state.player_11_team_2);
    formData.append("player_1_team_1_base_price", this.state.player_1_team_1_base_price);
    formData.append("player_2_team_1_base_price", this.state.player_2_team_1_base_price);
    formData.append("player_3_team_1_base_price", this.state.player_3_team_1_base_price);
    formData.append("player_4_team_1_base_price", this.state.player_4_team_1_base_price);
    formData.append("player_5_team_1_base_price", this.state.player_5_team_1_base_price);
    formData.append("player_6_team_1_base_price", this.state.player_6_team_1_base_price);
    formData.append("player_7_team_1_base_price", this.state.player_7_team_1_base_price);
    formData.append("player_8_team_1_base_price", this.state.player_8_team_1_base_price);
    formData.append("player_9_team_1_base_price", this.state.player_9_team_1_base_price);
    formData.append("player_10_team_1_base_price", this.state.player_10_team_1_base_price);
    formData.append("player_11_team_1_base_price", this.state.player_11_team_1_base_price);
    formData.append("player_1_team_2_base_price", this.state.player_1_team_2_base_price);
    formData.append("player_2_team_2_base_price", this.state.player_2_team_2_base_price);
    formData.append("player_3_team_2_base_price", this.state.player_3_team_2_base_price);
    formData.append("player_4_team_2_base_price", this.state.player_4_team_2_base_price);
    formData.append("player_5_team_2_base_price", this.state.player_5_team_2_base_price);
    formData.append("player_6_team_2_base_price", this.state.player_6_team_2_base_price);
    formData.append("player_7_team_2_base_price", this.state.player_7_team_2_base_price);
    formData.append("player_8_team_2_base_price", this.state.player_8_team_2_base_price);
    formData.append("player_9_team_2_base_price", this.state.player_9_team_2_base_price);
    formData.append("player_10_team_2_base_price", this.state.player_10_team_2_base_price);
    formData.append("player_11_team_2_base_price", this.state.player_11_team_2_base_price);

    let requestOptions = {
      method: "POST",
      url: "http://localhost:5000/api/match/add",
      headers: {
        "x-auth-token": localStorage.getItem("auth-token"),
        "Content-Type": "application/json"
      },
      data: formData
    };

    axios(requestOptions).then(res => {
      if (res.status == 200) {
        alert("Team has been added");
      } else {
        alert("Couldn't add the team");
      }
      this.props.history.push("/home");
    });
  };

  render() {
    return (
      <div>
        <Header />
        <Container className="border p-3 mt-5 mb-5">
          <Form className="mt-4 mb-4" onSubmit={this.submitHandler}>
            <Col className="mb-4">
              <h1>
                <strong>Create Match</strong>
              </h1>
            </Col>
            <Col>
              <FormGroup>
                <Label for="exampleSelect">
                  <h2>Sports</h2>
                </Label>
                <Input type="select" name="sport_name" id="sport_name" onChange={this.changeHandler}>
                  {this.state.sports.map(sport => (
                    <option>{sport.name}</option>
                  ))}
                </Input>
              </FormGroup>
            </Col>
            <div className="border-top mt-4 mb-4"></div>
            <Col>
              <FormGroup>
                <h2>
                  <Label for="exampleSelect">Team 1</Label>
                </h2>
                <Input type="select" name="team_1_name" id="team_1_name" onChange={this.changeHandler}>
                  {this.state.teams.map(team => (
                    <option>{team.name}</option>
                  ))}
                </Input>
              </FormGroup>
            </Col>
            <Col className="mb-3">
              <FormGroup>
                <Label>Player 1</Label>
                <Input type="text" size="5" name="player_1_team_1" id="player_1_team_1" placeholder="name" onChange={this.changeHandler} />
                <Input className="mt-2" type="number" size="5" name="player_1_team_1_base_price" id="player_1_team_1_base_price" placeholder="base price" onChange={this.changeHandler} />
              </FormGroup>
            </Col>
            <Col className="mb-3">
              <FormGroup>
                <Label>Player 2</Label>
                <Input type="text" size="5" name="player_2_team_1" id="player_2_team_1" placeholder="name" onChange={this.changeHandler} />
                <Input className="mt-2" type="number" size="5" name="player_2_team_1_base_price" id="player_2_team_1_base_price" placeholder="base price" onChange={this.changeHandler} />
              </FormGroup>
            </Col>
            <Col className="mb-3">
              <FormGroup>
                <Label>Player 3</Label>
                <Input type="text" size="5" name="player_3_team_1" id="player_3_team_1" placeholder="name" onChange={this.changeHandler} />
                <Input className="mt-2" type="number" size="5" name="player_3_team_1_base_price" id="player_3_team_1_base_price" placeholder="base price" onChange={this.changeHandler} />
              </FormGroup>
            </Col>
            <Col className="mb-3">
              <FormGroup>
                <Label>Player 4</Label>
                <Input type="text" size="5" name="player_4_team_1" id="player_4_team_1" placeholder="name" onChange={this.changeHandler} />
                <Input className="mt-2" type="number" size="5" name="player_4_team_1_base_price" id="player_4_team_1_base_price" placeholder="base price" onChange={this.changeHandler} />
              </FormGroup>
            </Col>
            <Col className="mb-3">
              <FormGroup>
                <Label>Player 5</Label>
                <Input type="text" size="5" name="player_5_team_1" id="player_5_team_1" placeholder="name" onChange={this.changeHandler} />
                <Input className="mt-2" type="number" size="5" name="player_5_team_1_base_price" id="player_5_team_1_base_price" placeholder="base price" onChange={this.changeHandler} />
              </FormGroup>
            </Col>
            <Col className="mb-3">
              <FormGroup>
                <Label>Player 6</Label>
                <Input type="text" size="5" name="player_6_team_1" id="player_6_team_1" placeholder="name" onChange={this.changeHandler} />
                <Input className="mt-2" type="number" size="5" name="player_6_team_1_base_price" id="player_6_team_1_base_price" placeholder="base price" onChange={this.changeHandler} />
              </FormGroup>
            </Col>
            <Col className="mb-3">
              <FormGroup>
                <Label>Player 7</Label>
                <Input type="text" size="5" name="player_7_team_1" id="player_7_team_1" placeholder="name" onChange={this.changeHandler} />
                <Input className="mt-2" type="number" size="5" name="player_7_team_1_base_price" id="player_7_team_1_base_price" placeholder="base price" onChange={this.changeHandler} />
              </FormGroup>
            </Col>
            <Col className="mb-3">
              <FormGroup>
                <Label>Player 8</Label>
                <Input type="text" size="5" name="player_8_team_1" id="player_8_team_1" placeholder="name" onChange={this.changeHandler} />
                <Input className="mt-2" type="number" size="5" name="player_8_team_1_base_price" id="player_8_team_1_base_price" placeholder="base price" onChange={this.changeHandler} />
              </FormGroup>
            </Col>
            <Col className="mb-3">
              <FormGroup>
                <Label>Player 9</Label>
                <Input type="text" size="5" name="player_9_team_1" id="player_9_team_1" placeholder="name" onChange={this.changeHandler} />
                <Input className="mt-2" type="number" size="5" name="player_9_team_1_base_price" id="player_9_team_1_base_price" placeholder="base price" onChange={this.changeHandler} />
              </FormGroup>
            </Col>
            <Col className="mb-3">
              <FormGroup>
                <Label>Player 10</Label>
                <Input type="text" size="5" name="player_10_team_1" id="player_10_team_1" placeholder="name" onChange={this.changeHandler} />
                <Input className="mt-2" type="number" size="5" name="player_10_team_1_base_price" id="player_10_team_1_base_price" placeholder="base price" onChange={this.changeHandler} />
              </FormGroup>
            </Col>
            <Col className="mb-3">
              <FormGroup>
                <Label>Player 11</Label>
                <Input type="text" size="5" name="player_11_team_1" id="player_11_team_1" placeholder="name" onChange={this.changeHandler} />
                <Input className="mt-2" type="number" size="5" name="player_11_team_1_base_price" id="player_11_team_1_base_price" placeholder="base price" onChange={this.changeHandler} />
              </FormGroup>
            </Col>
            <div className="border-top mt-4 mb-4"></div>
            <Col className="mb-3">
              <FormGroup>
                <h2>
                  <Label for="exampleSelect">Team 2</Label>
                </h2>
                <Input type="select" name="team_2_name" id="team_2_name" onChange={this.changeHandler}>
                  {this.state.teams.map(team => (
                    <option>{team.name}</option>
                  ))}
                </Input>
              </FormGroup>
            </Col>
            <Col className="mb-3">
              <FormGroup>
                <Label>Player 1</Label>
                <Input type="text" size="5" name="player_1_team_2" id="player_1_team_2" placeholder="name" onChange={this.changeHandler} />
                <Input className="mt-2" type="number" size="5" name="player_1_team_2_base_price" id="player_1_team_2_base_price" placeholder="base price" onChange={this.changeHandler} />
              </FormGroup>
            </Col>
            <Col className="mb-3">
              <FormGroup>
                <Label>Player 2</Label>
                <Input type="text" size="5" name="player_2_team_2" id="player_2_team_2" placeholder="name" onChange={this.changeHandler} />
                <Input className="mt-2" type="number" size="5" name="player_2_team_2_base_price" id="player_2_team_2_base_price" placeholder="base price" onChange={this.changeHandler} />
              </FormGroup>
            </Col>
            <Col className="mb-3">
              <FormGroup>
                <Label>Player 3</Label>
                <Input type="text" size="5" name="player_3_team_2" id="player_3_team_2" placeholder="name" onChange={this.changeHandler} />
                <Input className="mt-2" type="number" size="5" name="player_3_team_2_base_price" id="player_3_team_2_base_price" placeholder="base price" onChange={this.changeHandler} />
              </FormGroup>
            </Col>
            <Col className="mb-3">
              <FormGroup>
                <Label>Player 4</Label>
                <Input type="text" size="5" name="player_4_team_2" id="player_4_team_2" placeholder="name" onChange={this.changeHandler} />
                <Input className="mt-2" type="number" size="5" name="player_4_team_2_base_price" id="player_4_team_2_base_price" placeholder="base price" onChange={this.changeHandler} />
              </FormGroup>
            </Col>
            <Col className="mb-3">
              <FormGroup>
                <Label>Player 5</Label>
                <Input type="text" size="5" name="player_5_team_2" id="player_5_team_2" placeholder="name" onChange={this.changeHandler} />
                <Input className="mt-2" type="number" size="5" name="player_5_team_2_base_price" id="player_5_team_2_base_price" placeholder="base price" onChange={this.changeHandler} />
              </FormGroup>
            </Col>
            <Col className="mb-3">
              <FormGroup>
                <Label>Player 6</Label>
                <Input type="text" size="5" name="player_6_team_2" id="player_6_team_2" placeholder="name" onChange={this.changeHandler} />
                <Input className="mt-2" type="number" size="5" name="player_6_team_2_base_price" id="player_6_team_2_base_price" placeholder="base price" onChange={this.changeHandler} />
              </FormGroup>
            </Col>
            <Col className="mb-3">
              <FormGroup>
                <Label>Player 7</Label>
                <Input type="text" size="5" name="player_7_team_2" id="player_7_team_2" placeholder="name" onChange={this.changeHandler} />
                <Input className="mt-2" type="number" size="5" name="player_7_team_2_base_price" id="player_7_team_2_base_price" placeholder="base price" onChange={this.changeHandler} />
              </FormGroup>
            </Col>
            <Col className="mb-3">
              <FormGroup>
                <Label>Player 8</Label>
                <Input type="text" size="5" name="player_8_team_2" id="player_8_team_2" placeholder="name" onChange={this.changeHandler} />
                <Input className="mt-2" type="number" size="5" name="player_8_team_2_base_price" id="player_8_team_2_base_price" placeholder="base price" onChange={this.changeHandler} />
              </FormGroup>
            </Col>
            <Col className="mb-3">
              <FormGroup>
                <Label>Player 9</Label>
                <Input type="text" size="5" name="player_9_team_2" id="player_9_team_2" placeholder="name" onChange={this.changeHandler} />
                <Input className="mt-2" type="number" size="5" name="player_9_team_2_base_price" id="player_9_team_2_base_price" placeholder="base price" onChange={this.changeHandler} />
              </FormGroup>
            </Col>
            <Col className="mb-3">
              <FormGroup>
                <Label>Player 10</Label>
                <Input type="text" size="5" name="player_10_team_2" id="player_10_team_2" placeholder="name" onChange={this.changeHandler} />
                <Input className="mt-2" type="number" size="5" name="player_10_team_2_base_price" id="player_10_team_2_base_price" placeholder="base price" onChange={this.changeHandler} />
              </FormGroup>
            </Col>
            <Col className="mb-3">
              <FormGroup>
                <Label>Player 11</Label>
                <Input type="text" size="5" name="player_11_team_2" id="player_11_team_2" placeholder="name" onChange={this.changeHandler} />
                <Input className="mt-2" type="number" size="5" name="player_11_team_2_base_price" id="player_11_team_2_base_price" placeholder="base price" onChange={this.changeHandler} />
              </FormGroup>
            </Col>
            <Col className="mb-3">
              <Button type="submit" style={{ backgroundColor: "#ad0000" }}>
                Create Match
              </Button>
            </Col>
          </Form>
        </Container>
      </div>
    );
  }
}

export default CreateMatch;
