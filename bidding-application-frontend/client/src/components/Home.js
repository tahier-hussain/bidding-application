import React, { Component } from "react";
import { Container, Col, Form, FormGroup, Label, Input, Button, Alert } from "reactstrap";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import Header from "./Header";
import HomeAdmin from "./HomeAdmin";
import HomeUser from "./HomeUser";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetails: ""
    };
  }

  componentDidMount = () => {
    if (!localStorage.getItem("auth-token")) {
      if (localStorage.getItem("user-details")) {
        localStorage.removeItem("user-details");
      }
      this.props.history.push("/");
    } else {
      this.setState({
        userDetails: JSON.parse(localStorage.getItem("user-details"))
      });
    }
  };

  render() {
    return (
      <div>
        <Header />
        {this.state.userDetails.type === "admin" ? <HomeAdmin /> : <HomeUser />}
      </div>
    );
  }
}

export default Home;
