import React, { Component } from 'react';
import logo from './logo.svg';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponent';
import MenuBar from './components/MenuBar';
import './App.css';
import {DISHES} from './shared/dishes';
import {OPTIONS} from './shared/options';

class App extends Component {
	
	constructor(props){
		super(props);
		
		this.state={
			
			dishes:DISHES,
			options:OPTIONS
		};
		
	}
	
  render() {
    return (
      <div>
        <Navbar dark color="primary">
		<div className="container">
		<NavbarBrand href="/">Qué triste</NavbarBrand>
		</div>
		</Navbar>
		<MenuBar options={this.state.options}/>
		<Menu dishes={this.state.dishes}/>
		<div>
	  ¿Por qué me han hecho esto? ¿Por qué todos se han comportado así conmigo? ¿Por qué todos me abandonan cuando los necesito?
	  </div>
      </div>
	  
    );
  }
}

export default App;
