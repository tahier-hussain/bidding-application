import React, { Component } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, Modal, ModalHeader, ModalBody, NavItem, NavLink, Container } from "reactstrap";
import { Link } from "react-router-dom";

class Header extends Component {
  state = {
    isOpen: false,
    userDetails: ""
  };

  componentDidMount() {
    if (localStorage.getItem("user-details")) {
      this.setState({
        userDetails: JSON.parse(localStorage.getItem("user-details"))
      });
    }
  }

  toggle = val => {
    if (val == "drop") {
      this.setState({
        isOpen: !this.state.isOpen
      });
    } else {
      this.setState({
        modal: !this.state.modal
      });
    }
  };

  logout = () => {
    localStorage.removeItem("auth-token");
    localStorage.removeItem("user-details");
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <Navbar style={{ backgroundColor: "#ad0000" }} dark expand="md" className="fixed-top">
          <Container>
            <NavbarBrand href="/home">Dream 11</NavbarBrand>
            <NavbarToggler onClick={() => this.toggle("drop")}></NavbarToggler>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavLink href="/about-us">About Us</NavLink>
                {localStorage.getItem("auth-token") ? (
                  <NavLink href="/" onClick={this.logout}>
                    Logout
                  </NavLink>
                ) : (
                  <NavLink href="/">Login</NavLink>
                )}
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Header;
