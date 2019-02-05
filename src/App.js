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
		<NavbarBrand href="/">Disglosia xdd</NavbarBrand>
		</div>
		</Navbar>
		<MenuBar options={this.state.options}/>
		<Menu dishes={this.state.dishes}/>
		<div>
			...Ayer me dijiste que tú me querías, pero todo fue mentira
	  </div>
      </div>
	  
    );
  }
}

export default App;
