import React, { Component } from 'react';
import {
    Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody, Label, Col, Input, Form, FormGroup
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin=this.handleLogin.bind(this);
    }

    toggleNav() {

        this.setState({ isNavOpen: !this.state.isNavOpen });

    }

    toggleModal() {

        this.setState({ isModalOpen: !this.state.isModalOpen });

    }

    handleLogin(event){

        this.toggleModal();
        alert("Username: "+this.userName.value+" Password: "+this.passWord.value+
        " Remember: "+this.remember.checked);
        event.preventDefault();

    }

    render() {
        //<React.Fragment>, groups React elements, doesn't add an extra
        // node into the DOM. A div would.
        return (
            <>
                <Navbar dark expand="md">
                    <div className="container">

                        <NavbarToggler onClick={this.toggleNav} />

                        <NavbarBrand className="mr-auto" href="/">
                            <img src="assets/images/logo.png" height="30" width="41" alt="xd" />

                        </NavbarBrand>

                        <Collapse isOpen={this.state.isNavOpen} navbar>

                            <Nav navbar>

                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <span className="fa fa-home fa-lg"></span> Home
                    </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                        <span className="fa fa-info fa-lg"></span> About us
                    </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink className="nav-link" to="/menu">
                                        <span className="fa fa-list fa-lg"></span> Menu
                    </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <span className="fa fa-address-card fa-lg"></span> Contact us
                    </NavLink>
                                </NavItem>

                            </Nav>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button outline onClick={this.toggleModal}>
                                        <span className="fa fa-sign-in fa-lg"></span> Sign in
                                    </Button>
                                </NavItem>
                            </Nav>

                        </Collapse>

                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>The Krusty Krab</h1>
                                <p>We take inspiration from Spongebob</p>

                            </div>
                        </div>
                    </div>
                </Jumbotron>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="userName">Username</Label>
                                <Input type="text" id="userName" name="userName"
                                innerRef={(input)=>this.userName=input} />
                            </FormGroup>
                            <FormGroup>

                                <Label htmlFor="passWord">Password</Label>
                                <Input type="password" id="passWord" name="passWord"
                                innerRef={(input)=>this.passWord=input} />
                            </FormGroup>

                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="rememeber" 
                                    innerRef={(input)=>this.remember=input}/>
                                    Remember me
                                    </Label>
                            </FormGroup>

                                <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>

            </>);
    }

}

export default Header;