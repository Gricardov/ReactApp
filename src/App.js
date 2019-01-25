import React, { Component } from 'react';
import logo from './logo.svg';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar dark color="primary">
		<div className="container">
		<NavbarBrand href="/">Mila :(</NavbarBrand>
		</div>
		</Navbar>
		<Menu/>
		<div>
	  ¿Por qué me han hecho esto? ¿Por qué todos se han comportado así conmigo? ¿Por qué todos me abandonan cuando los necesito?
	  </div>
      </div>
	  
    );
  }
}

export default App;
