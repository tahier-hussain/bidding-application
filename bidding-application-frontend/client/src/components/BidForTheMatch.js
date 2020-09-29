import React, { Component } from "react";
import { Container, Col, Form, FormGroup, Label, Input, Button, Alert } from "reactstrap";
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

let player_1_team_1_base_price;
let player_2_team_1_base_price;
let player_3_team_1_base_price;
let player_4_team_1_base_price;
let player_5_team_1_base_price;
let player_6_team_1_base_price;
let player_7_team_1_base_price;
let player_8_team_1_base_price;
let player_9_team_1_base_price;
let player_10_team_1_base_price;
let player_11_team_1_base_price;
let player_1_team_2_base_price;
let player_2_team_2_base_price;
let player_3_team_2_base_price;
let player_4_team_2_base_price;
let player_5_team_2_base_price;
let player_6_team_2_base_price;
let player_7_team_2_base_price;
let player_8_team_2_base_price;
let player_9_team_2_base_price;
let player_10_team_2_base_price;
let player_11_team_2_base_price;
class BidForTheMatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      match: {},
      id: "",
      totalAmount: 200000,
      dreamTeam: [],
      biddingAmount: ""
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

        player_1_team_1_base_price = res.data.player_1_team_1.base_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        player_2_team_1_base_price = res.data.player_2_team_1.base_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        player_3_team_1_base_price = res.data.player_3_team_1.base_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        player_4_team_1_base_price = res.data.player_4_team_1.base_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        player_5_team_1_base_price = res.data.player_5_team_1.base_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        player_6_team_1_base_price = res.data.player_6_team_1.base_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        player_7_team_1_base_price = res.data.player_7_team_1.base_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        player_8_team_1_base_price = res.data.player_8_team_1.base_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        player_9_team_1_base_price = res.data.player_9_team_1.base_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        player_10_team_1_base_price = res.data.player_10_team_1.base_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        player_11_team_1_base_price = res.data.player_11_team_1.base_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        player_1_team_2_base_price = res.data.player_1_team_2.base_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        player_2_team_2_base_price = res.data.player_2_team_2.base_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        player_3_team_2_base_price = res.data.player_3_team_2.base_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        player_4_team_2_base_price = res.data.player_4_team_2.base_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        player_5_team_2_base_price = res.data.player_5_team_2.base_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        player_6_team_2_base_price = res.data.player_6_team_2.base_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        player_7_team_2_base_price = res.data.player_7_team_2.base_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        player_8_team_2_base_price = res.data.player_8_team_2.base_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        player_9_team_2_base_price = res.data.player_9_team_2.base_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        player_10_team_2_base_price = res.data.player_10_team_2.base_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        player_11_team_2_base_price = res.data.player_11_team_2.base_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        this.setState({
          match: res.data
        });
      }
      console.log(res.data.player_11_team_2.base_price);
      console.log(this.state.match.player_1_team_1);
    });
  };

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addPlayer = async player => {
    console.log("HELLO");

    let bool = false;
    for (let i = 0; i < this.state.dreamTeam.length; i++) {
      if (this.state.dreamTeam[i] === player) {
        bool = true;
        alert("Player already selected");
        break;
      }
    }

    if (bool === false) {
      let val = 0;
      if (this.state.match.player_1_team_1.name === player) {
        val = this.state.match.player_1_team_1.base_price;
      }
      if (this.state.match.player_2_team_1.name === player) {
        val = this.state.match.player_2_team_1.base_price;
      }
      if (this.state.match.player_3_team_1.name === player) {
        val = this.state.match.player_3_team_1.base_price;
      }
      if (this.state.match.player_4_team_1.name === player) {
        val = this.state.match.player_4_team_1.base_price;
      }
      if (this.state.match.player_4_team_1.name === player) {
        val = this.state.match.player_4_team_1.base_price;
      }
      if (this.state.match.player_5_team_1.name === player) {
        val = this.state.match.player_5_team_1.base_price;
      }
      if (this.state.match.player_6_team_1.name === player) {
        val = this.state.match.player_6_team_1.base_price;
      }
      if (this.state.match.player_7_team_1.name === player) {
        val = this.state.match.player_7_team_1.base_price;
      }
      if (this.state.match.player_8_team_1.name === player) {
        val = this.state.match.player_8_team_1.base_price;
      }
      if (this.state.match.player_9_team_1.name === player) {
        val = this.state.match.player_9_team_1.base_price;
      }
      if (this.state.match.player_10_team_1.name === player) {
        val = this.state.match.player_10_team_1.base_price;
      }
      if (this.state.match.player_11_team_1.name === player) {
        val = this.state.match.player_11_team_1.base_price;
      }

      if (this.state.match.player_1_team_2.name === player) {
        val = this.state.match.player_1_team_2.base_price;
      }
      if (this.state.match.player_2_team_2.name === player) {
        val = this.state.match.player_2_team_2.base_price;
      }
      if (this.state.match.player_3_team_2.name === player) {
        val = this.state.match.player_3_team_2.base_price;
      }
      if (this.state.match.player_4_team_2.name === player) {
        val = this.state.match.player_4_team_2.base_price;
      }
      if (this.state.match.player_4_team_2.name === player) {
        val = this.state.match.player_4_team_2.base_price;
      }
      if (this.state.match.player_5_team_2.name === player) {
        val = this.state.match.player_5_team_2.base_price;
      }
      if (this.state.match.player_6_team_2.name === player) {
        val = this.state.match.player_6_team_2.base_price;
      }
      if (this.state.match.player_7_team_2.name === player) {
        val = this.state.match.player_7_team_2.base_price;
      }
      if (this.state.match.player_8_team_2.name === player) {
        val = this.state.match.player_8_team_2.base_price;
      }
      if (this.state.match.player_9_team_2.name === player) {
        val = this.state.match.player_9_team_2.base_price;
      }
      if (this.state.match.player_10_team_2.name === player) {
        val = this.state.match.player_10_team_2.base_price;
      }
      if (this.state.match.player_11_team_2.name === player) {
        val = this.state.match.player_11_team_2.base_price;
      }

      await this.setState({
        totalAmount: this.state.totalAmount - val
      });

      if (this.state.totalAmount < 0) {
        alert("Insufficient balance");
        this.setState({
          totalAmount: this.state.totalAmount + val
        });
      } else {
        let arr = [];
        arr = this.state.dreamTeam.concat(player);
        await this.setState({
          dreamTeam: arr
        });
      }
    }

    console.log(this.state.dreamTeam);
  };

  removePlayer = async player => {
    let arr = [];
    let index = 0;
    for (let i = 0; i < this.state.dreamTeam.length; i++) {
      if (await (this.state.dreamTeam[i] !== player)) {
        arr[index++] = await this.state.dreamTeam[i];
      }
    }

    await this.setState({
      dreamTeam: arr
    });

    let val = 0;
    if (this.state.match.player_1_team_1.name === player) {
      val = this.state.match.player_1_team_1.base_price;
    }
    if (this.state.match.player_2_team_1.name === player) {
      val = this.state.match.player_2_team_1.base_price;
    }
    if (this.state.match.player_3_team_1.name === player) {
      val = this.state.match.player_3_team_1.base_price;
    }
    if (this.state.match.player_4_team_1.name === player) {
      val = this.state.match.player_4_team_1.base_price;
    }
    if (this.state.match.player_4_team_1.name === player) {
      val = this.state.match.player_4_team_1.base_price;
    }
    if (this.state.match.player_5_team_1.name === player) {
      val = this.state.match.player_5_team_1.base_price;
    }
    if (this.state.match.player_6_team_1.name === player) {
      val = this.state.match.player_6_team_1.base_price;
    }
    if (this.state.match.player_7_team_1.name === player) {
      val = this.state.match.player_7_team_1.base_price;
    }
    if (this.state.match.player_8_team_1.name === player) {
      val = this.state.match.player_8_team_1.base_price;
    }
    if (this.state.match.player_9_team_1.name === player) {
      val = this.state.match.player_9_team_1.base_price;
    }
    if (this.state.match.player_10_team_1.name === player) {
      val = this.state.match.player_10_team_1.base_price;
    }
    if (this.state.match.player_11_team_1.name === player) {
      val = this.state.match.player_11_team_1.base_price;
    }

    if (this.state.match.player_1_team_2.name === player) {
      val = this.state.match.player_1_team_2.base_price;
    }
    if (this.state.match.player_2_team_2.name === player) {
      val = this.state.match.player_2_team_2.base_price;
    }
    if (this.state.match.player_3_team_2.name === player) {
      val = this.state.match.player_3_team_2.base_price;
    }
    if (this.state.match.player_4_team_2.name === player) {
      val = this.state.match.player_4_team_2.base_price;
    }
    if (this.state.match.player_4_team_2.name === player) {
      val = this.state.match.player_4_team_2.base_price;
    }
    if (this.state.match.player_5_team_2.name === player) {
      val = this.state.match.player_5_team_2.base_price;
    }
    if (this.state.match.player_6_team_2.name === player) {
      val = this.state.match.player_6_team_2.base_price;
    }
    if (this.state.match.player_7_team_2.name === player) {
      val = this.state.match.player_7_team_2.base_price;
    }
    if (this.state.match.player_8_team_2.name === player) {
      val = this.state.match.player_8_team_2.base_price;
    }
    if (this.state.match.player_9_team_2.name === player) {
      val = this.state.match.player_9_team_2.base_price;
    }
    if (this.state.match.player_10_team_2.name === player) {
      val = this.state.match.player_10_team_2.base_price;
    }
    if (this.state.match.player_11_team_2.name === player) {
      val = this.state.match.player_11_team_2.base_price;
    }

    await this.setState({
      totalAmount: this.state.totalAmount + val
    });
  };

  submitHandler = event => {
    event.preventDefault();

    console.log("HELLO");
    let requestOptions = {
      method: "POST",
      url: "http://localhost:5000/api/dream-team/add",
      headers: {
        "x-auth-token": localStorage.getItem("auth-token"),
        "Content-Type": "application/json"
      },
      data: {
        match_id: this.state.id,
        bidding_price: this.state.biddingAmount,
        total_amount: 150000 - this.state.totalAmount,
        player_1: this.state.dreamTeam[0],
        player_2: this.state.dreamTeam[1],
        player_3: this.state.dreamTeam[2],
        player_4: this.state.dreamTeam[3],
        player_5: this.state.dreamTeam[4],
        player_6: this.state.dreamTeam[5],
        player_7: this.state.dreamTeam[6],
        player_8: this.state.dreamTeam[7],
        player_9: this.state.dreamTeam[8],
        player_10: this.state.dreamTeam[9],
        player_11: this.state.dreamTeam[10]
      }
    };

    axios(requestOptions).then(res => {
      if (res.status === 200) {
        alert("Your Dream 11 has been created");
        location.reload();
      } else {
        alert("Something went wrong");
      }
    });
  };

  render() {
    return (
      <div>
        <Header />
        <div className="container border mt-5 mb-5 p-5">
          <h4>
            <strong>Balance: {this.state.totalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</strong>
          </h4>
          <p>Rules:</p>
          <p>
            <strong>1.) Atleast 5 players from each team</strong>
          </p>
          <p>
            <strong>2.) Atleast 4 Bowlers</strong>
          </p>
          <p>
            <strong>3.) Atleast 5 Batsmen</strong>
          </p>
          <p>
            <strong>4.) Atleast 1 Wicket Keeper</strong>
          </p>
          <h4>
            <strong>No of Players more to select: {11 - this.state.dreamTeam.length}</strong>
          </h4>
          <div className="row">
            <div className="col-sm-4">
              <h3 className="row mb-2">
                <strong>{this.state.match.team_1_name}</strong>
              </h3>
              <div className="border-bottom p-3 row mb-2">
                <Button onClick={() => this.addPlayer(player_1_team_1)} className="col-sm-8" className="primary float-right">
                  Add
                </Button>
                <p className="col-sm-8">
                  <strong className="float-left mb-2">{player_1_team_1} (C)</strong>
                </p>
                <strong style={{ marginLeft: "70px" }}>Base Price:{player_1_team_1_base_price}</strong>
              </div>
              <div className="border-bottom p-3 row mb-2">
                <Button onClick={() => this.addPlayer(player_2_team_1)} className="col-sm-8" className="primary float-right">
                  Add
                </Button>
                <p className="col-sm-8">
                  <strong className="float-left mb-2">{player_2_team_1}</strong>
                </p>
                <strong style={{ marginLeft: "70px" }}>Base Price:{player_2_team_1_base_price}</strong>
              </div>
              <div className="border-bottom p-3 row mb-2">
                <Button onClick={() => this.addPlayer(player_3_team_1)} className="col-sm-8" className="primary float-right">
                  Add
                </Button>
                <p className="col-sm-8">
                  <strong className="float-left mb-2">{player_3_team_1}</strong>
                </p>
                <strong style={{ marginLeft: "70px" }}>Base Price:{player_3_team_1_base_price}</strong>
              </div>
              <div className="border-bottom p-3 row mb-2">
                <Button onClick={() => this.addPlayer(player_4_team_1)} className="col-sm-8" className="primary float-right">
                  Add
                </Button>
                <p className="col-sm-8">
                  <strong className="float-left mb-2">{player_4_team_1}</strong>
                </p>
                <strong style={{ marginLeft: "70px" }}>Base Price:{player_4_team_1_base_price}</strong>
              </div>
              <div className="border-bottom p-3 row mb-2">
                <Button onClick={() => this.addPlayer(player_5_team_1)} className="col-sm-8" className="primary float-right">
                  Add
                </Button>
                <p className="col-sm-8">
                  <strong className="float-left mb-2">{player_5_team_1}</strong>
                </p>
                <strong style={{ marginLeft: "70px" }}>Base Price:{player_5_team_1_base_price}</strong>
              </div>
              <div className="border-bottom p-3 row mb-2">
                <Button onClick={() => this.addPlayer(player_6_team_1)} className="col-sm-8" className="primary float-right">
                  Add
                </Button>
                <p className="col-sm-8">
                  <strong className="float-left mb-2">{player_6_team_1}</strong>
                </p>
                <strong style={{ marginLeft: "70px" }}>Base Price:{player_6_team_1_base_price}</strong>
              </div>
              <div className="border-bottom p-3 row mb-2">
                <Button onClick={() => this.addPlayer(player_7_team_1)} className="col-sm-8" className="primary float-right">
                  Add
                </Button>
                <p className="col-sm-8">
                  <strong className="float-left mb-2">{player_7_team_1}</strong>
                </p>
                <strong style={{ marginLeft: "70px" }}>Base Price:{player_7_team_1_base_price}</strong>
              </div>
              <div className="border-bottom p-3 row mb-2">
                <Button onClick={() => this.addPlayer(player_8_team_1)} className="col-sm-8" className="primary float-right">
                  Add
                </Button>
                <p className="col-sm-8">
                  <strong className="float-left mb-2">{player_8_team_1}</strong>
                </p>
                <strong style={{ marginLeft: "70px" }}>Base Price:{player_8_team_1_base_price}</strong>
              </div>
              <div className="border-bottom p-3 row mb-2">
                <Button onClick={() => this.addPlayer(player_9_team_1)} className="col-sm-8" className="primary float-right">
                  Add
                </Button>
                <p className="col-sm-8">
                  <strong className="float-left mb-2">{player_9_team_1}</strong>
                </p>
                <strong style={{ marginLeft: "70px" }}>Base Price:{player_9_team_1_base_price}</strong>
              </div>
              <div className="border-bottom p-3 row mb-2">
                <Button onClick={() => this.addPlayer(player_10_team_1)} className="col-sm-8" className="primary float-right">
                  Add
                </Button>
                <p className="col-sm-8">
                  <strong className="float-left mb-2">{player_10_team_1}</strong>
                </p>
                <strong style={{ marginLeft: "70px" }}>Base Price:{player_10_team_1_base_price}</strong>
              </div>
              <div className="border-bottom p-3 row mb-2">
                <Button onClick={() => this.addPlayer(player_11_team_1)} className="col-sm-8" className="primary float-right">
                  Add
                </Button>
                <p className="col-sm-8">
                  <strong className="float-left">{player_11_team_1}</strong>
                </p>
                <strong style={{ marginLeft: "70px" }}>Base Price:{player_11_team_1_base_price}</strong>
              </div>
            </div>
            <div className="border-left border-right p-3 col-sm-4">
              <h3>
                <strong>Your Dream Team</strong>
              </h3>
              <div className="row mb-2 ml-2">
                {this.state.dreamTeam[0] ? (
                  <Button onClick={() => this.removePlayer(this.state.dreamTeam[0])} color="danger" className="col-sm-3 float-right">
                    Remove
                  </Button>
                ) : (
                  ""
                )}
                <p className="col-sm-3 border-bottom">
                  <strong className="float-left mb-2">{this.state.dreamTeam[0]}</strong>
                </p>
              </div>
              <div className="row mb-2 ml-2">
                {this.state.dreamTeam[1] ? (
                  <Button onClick={() => this.removePlayer(this.state.dreamTeam[1])} color="danger" className="col-sm-3 float-right">
                    Remove
                  </Button>
                ) : (
                  ""
                )}
                <p className="col-sm-3 border-bottom">
                  <strong className="float-left mb-2">{this.state.dreamTeam[1]}</strong>
                </p>
              </div>
              <div className="row mb-2 ml-2">
                {this.state.dreamTeam[2] ? (
                  <Button onClick={() => this.removePlayer(this.state.dreamTeam[2])} color="danger" className="col-sm-3 float-right">
                    Remove
                  </Button>
                ) : (
                  ""
                )}
                <p className="col-sm-3 border-bottom">
                  <strong className="float-left mb-2">{this.state.dreamTeam[2]}</strong>
                </p>
              </div>
              <div className="row mb-2 ml-2">
                {this.state.dreamTeam[3] ? (
                  <Button onClick={() => this.removePlayer(this.state.dreamTeam[3])} color="danger" className="col-sm-3 float-right">
                    Remove
                  </Button>
                ) : (
                  ""
                )}
                <p className="col-sm-3 border-bottom">
                  <strong className="float-left mb-2">{this.state.dreamTeam[3]}</strong>
                </p>
              </div>
              <div className="row mb-2 ml-2">
                {this.state.dreamTeam[4] ? (
                  <Button onClick={() => this.removePlayer(this.state.dreamTeam[4])} color="danger" className="col-sm-3 float-right">
                    Remove
                  </Button>
                ) : (
                  ""
                )}
                <p className="col-sm-3 border-bottom">
                  <strong className="float-left mb-2">{this.state.dreamTeam[4]}</strong>
                </p>
              </div>
              <div className="row mb-2 ml-2">
                {this.state.dreamTeam[5] ? (
                  <Button onClick={() => this.removePlayer(this.state.dreamTeam[5])} color="danger" className="col-sm-3 float-right">
                    Remove
                  </Button>
                ) : (
                  ""
                )}
                <p className="col-sm-3 border-bottom">
                  <strong className="float-left mb-2">{this.state.dreamTeam[5]}</strong>
                </p>
              </div>
              <div className="row mb-2 ml-2">
                {this.state.dreamTeam[6] ? (
                  <Button onClick={() => this.removePlayer(this.state.dreamTeam[6])} color="danger" className="col-sm-3 float-right">
                    Remove
                  </Button>
                ) : (
                  ""
                )}
                <p className="col-sm-3 border-bottom">
                  <strong className="float-left mb-2">{this.state.dreamTeam[6]}</strong>
                </p>
              </div>
              <div className="row mb-2 ml-2">
                {this.state.dreamTeam[7] ? (
                  <Button onClick={() => this.removePlayer(this.state.dreamTeam[7])} color="danger" className="col-sm-3 float-right">
                    Remove
                  </Button>
                ) : (
                  ""
                )}
                <p className="col-sm-3 border-bottom">
                  <strong className="float-left mb-2">{this.state.dreamTeam[7]}</strong>
                </p>
              </div>
              <div className="row mb-2 ml-2">
                {this.state.dreamTeam[8] ? (
                  <Button onClick={() => this.removePlayer(this.state.dreamTeam[8])} color="danger" className="col-sm-3 float-right">
                    Remove
                  </Button>
                ) : (
                  ""
                )}
                <p className="col-sm-3 border-bottom">
                  <strong className="float-left mb-2">{this.state.dreamTeam[8]}</strong>
                </p>
              </div>
              <div className="row mb-2 ml-2">
                {this.state.dreamTeam[9] ? (
                  <Button onClick={() => this.removePlayer(this.state.dreamTeam[9])} color="danger" className="col-sm-3 float-right">
                    Remove
                  </Button>
                ) : (
                  ""
                )}
                <p className="col-sm-3 border-bottom">
                  <strong className="float-left mb-2">{this.state.dreamTeam[9]}</strong>
                </p>
              </div>
              <div className="row mb-2 ml-2">
                {this.state.dreamTeam[10] ? (
                  <Button onClick={() => this.removePlayer(this.state.dreamTeam[10])} color="danger" className="col-sm-3 float-right">
                    Remove
                  </Button>
                ) : (
                  ""
                )}
                <p className="col-sm-3 border-bottom">
                  <strong className="float-left">{this.state.dreamTeam[10]}</strong>
                </p>
              </div>
              {this.state.dreamTeam.length - 11 === 0 ? (
                <Form className="mt-5 mb-4" onSubmit={this.submitHandler}>
                  <Col>
                    <FormGroup>
                      <Label>Bid Amount</Label>
                      <Input type="text" name="biddingAmount" id="biddingAmount" placeholder="bid amount" onChange={this.changeHandler} />
                    </FormGroup>
                  </Col>
                  <Col>
                    <Button style={{ backgroundColor: "#ad0000" }}>Submit</Button>
                  </Col>
                </Form>
              ) : (
                ""
              )}
            </div>
            <div className="col-sm-4">
              <h3>
                <strong>{this.state.match.team_2_name}</strong>
              </h3>
              <div className="border-bottom p-3 border-bottom row mb-2 ml-2">
                <Button onClick={() => this.addPlayer(player_1_team_2)} className="col-sm-8" className="primary float-right">
                  Add
                </Button>
                <p className="col-sm-8">
                  <strong className="float-left">{player_1_team_2} (C)</strong>
                </p>
                <strong style={{ marginLeft: "70px" }}>Base Price:{player_1_team_2_base_price}</strong>
              </div>
              <div className="border-bottom p-3 row mb-2 ml-2">
                <Button onClick={() => this.addPlayer(player_2_team_2)} className="col-sm-8" className="primary float-right">
                  Add
                </Button>
                <p className="col-sm-8">
                  <strong className="float-left mb-2">{player_2_team_2}</strong>
                </p>
                <strong style={{ marginLeft: "70px" }}>Base Price:{player_2_team_2_base_price}</strong>{" "}
              </div>
              <div className="border-bottom p-3 row mb-2 ml-2">
                <Button onClick={() => this.addPlayer(player_3_team_2)} className="col-sm-8" className="primary float-right">
                  Add
                </Button>
                <p className="col-sm-8">
                  <strong className="float-left mb-2">{player_3_team_2}</strong>
                </p>
                <strong style={{ marginLeft: "70px" }}>Base Price:{player_3_team_2_base_price}</strong>{" "}
              </div>
              <div className="border-bottom p-3 row mb-2 ml-2">
                <Button onClick={() => this.addPlayer(player_4_team_2)} className="col-sm-8" className="primary float-right">
                  Add
                </Button>
                <p className="col-sm-8">
                  <strong className="float-left mb-2">{player_4_team_2}</strong>
                </p>
                <strong style={{ marginLeft: "70px" }}>Base Price:{player_4_team_2_base_price}</strong>{" "}
              </div>
              <div className="border-bottom p-3 row mb-2 ml-2">
                <Button onClick={() => this.addPlayer(player_5_team_2)} className="col-sm-8" className="primary float-right">
                  Add
                </Button>
                <p className="col-sm-8">
                  <strong className="float-left mb-2">{player_5_team_2}</strong>
                </p>
                <strong style={{ marginLeft: "70px" }}>Base Price:{player_5_team_2_base_price}</strong>{" "}
              </div>
              <div className="border-bottom p-3 row mb-2 ml-2">
                <Button onClick={() => this.addPlayer(player_6_team_2)} className="col-sm-8" className="primary float-right">
                  Add
                </Button>
                <p className="col-sm-8">
                  <strong className="float-left mb-2">{player_6_team_2}</strong>
                </p>
                <strong style={{ marginLeft: "70px" }}>Base Price:{player_6_team_2_base_price}</strong>{" "}
              </div>
              <div className="border-bottom p-3 row mb-2 ml-2">
                <Button onClick={() => this.addPlayer(player_7_team_2)} className="col-sm-8" className="primary float-right">
                  Add
                </Button>
                <p className="col-sm-8">
                  <strong className="float-left mb-2">{player_7_team_2}</strong>
                </p>
                <strong style={{ marginLeft: "70px" }}>Base Price:{player_7_team_2_base_price}</strong>{" "}
              </div>
              <div className="border-bottom p-3 row mb-2 ml-2">
                <Button onClick={() => this.addPlayer(player_8_team_2)} className="col-sm-8" className="primary float-right">
                  Add
                </Button>
                <p className="col-sm-8">
                  <strong className="float-left mb-2">{player_8_team_2}</strong>
                </p>
                <strong style={{ marginLeft: "70px" }}>Base Price:{player_8_team_2_base_price}</strong>{" "}
              </div>
              <div className="border-bottom p-3 row mb-2 ml-2">
                <Button onClick={() => this.addPlayer(player_9_team_2)} className="col-sm-8" className="primary float-right">
                  Add
                </Button>
                <p className="col-sm-8">
                  <strong className="float-left mb-2">{player_9_team_2}</strong>
                </p>
                <strong style={{ marginLeft: "70px" }}>Base Price:{player_9_team_2_base_price}</strong>{" "}
              </div>
              <div className="border-bottom p-3 row mb-2 ml-2">
                <Button onClick={() => this.addPlayer(player_10_team_2)} className="col-sm-8" className="primary float-right">
                  Add
                </Button>
                <p className="col-sm-8">
                  <strong className="float-left mb-2">{player_10_team_2}</strong>
                </p>
                <strong style={{ marginLeft: "70px" }}>Base Price:{player_10_team_2_base_price}</strong>{" "}
              </div>
              <div className="border-bottom p-3 row mb-2 ml-2">
                <Button onClick={() => this.addPlayer(player_11_team_2)} className="col-sm-8" className="primary float-right">
                  Add
                </Button>
                <p className="col-sm-8">
                  <strong className="float-left mb-2">{player_11_team_2}</strong>
                </p>
                <strong style={{ marginLeft: "70px" }}>Base Price:{player_11_team_2_base_price}</strong>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BidForTheMatch;
