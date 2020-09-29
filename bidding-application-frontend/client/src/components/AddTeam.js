import React, { Component } from "react";
import { Container, Col, Form, FormGroup, Label, Input, Button, Alert } from "reactstrap";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import Header from "./Header";

class AddTeam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      sports: [],
      sport_name: "",
      sport_id: ""
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

  submitHandler = event => {
    event.preventDefault();

    for (let i = 0; i < this.state.sports.length; i++) {
      if (this.state.sports[i].name.trim() === this.state.sport_name.trim()) {
        console.log(this.state.sports[i]._id);
        this.setState({
          sport_id: this.state.sports[i]._id
        });
      }
    }
    const formData = new FormData();
    formData.append("file", this.state.file);
    formData.append("name", this.state.name);
    formData.append("sport_id", this.state.sport_id);

    let requestOptions = {
      method: "POST",
      url: "http://localhost:5000/api/team/add",
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
            <Col>
              <h2>Add Team</h2>
            </Col>
            <Col>
              <FormGroup>
                <Label>Name</Label>
                <Input type="text" size="5" name="name" id="name" placeholder="name" onChange={this.changeHandler} />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="exampleSelect">Sports Club</Label>
                <Input type="select" name="sport_name" id="sport_name" onChange={this.changeHandler}>
                  {this.state.sports.map(sport => (
                    <option>{sport.name}</option>
                  ))}
                </Input>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label>Upload Picture</Label>
                <Input type="file" name="file" id="file" placeholder="profile picture" onChange={this.changeHandlerForFile} />
              </FormGroup>
            </Col>
            <Col>
              <Button type="submit" style={{ backgroundColor: "#ad0000" }}>
                Add
              </Button>
            </Col>
          </Form>
        </Container>
      </div>
    );
  }
}

export default AddTeam;
