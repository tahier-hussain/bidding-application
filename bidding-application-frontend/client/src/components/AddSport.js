import React, { Component } from "react";
import { Container, Col, Form, FormGroup, Label, Input, Button, Alert } from "reactstrap";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import Header from "./Header";

class AddSport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

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

    const formData = new FormData();
    formData.append("file", this.state.file);
    formData.append("name", this.state.name);

    let requestOptions = {
      method: "POST",
      url: "http://localhost:5000/api/sport/add",
      headers: {
        "x-auth-token": localStorage.getItem("auth-token"),
        "Content-Type": "application/json"
      },
      data: formData
    };

    axios(requestOptions).then(res => {
      if (res.status == 200) {
        alert("Sport has been added");
      } else {
        alert("Couldn't add the sport");
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
              <h2>Add Sport</h2>
            </Col>
            <Col>
              <FormGroup>
                <Label>Name</Label>
                <Input type="text" size="5" name="name" id="name" placeholder="name" onChange={this.changeHandler} />
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

export default AddSport;
