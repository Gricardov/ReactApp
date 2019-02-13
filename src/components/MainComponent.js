import React, { Component } from 'react';
import Menu from './MenuComponent';
import MenuBar from './MenuBar';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { DISHES } from '../shared/dishes';
import { OPTIONS } from '../shared/options';
import DishDetail from './DishDetailComponent';
import {Switch, Route,Redirect} from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {

            dishes: DISHES,
            options: OPTIONS,
        };

    }



    render() {

        const HomePage=()=>{

        return (

        <Home/>

        );
        }

        return (
            <div>
                <Header />
                <MenuBar options={this.state.options}
                />
                <Switch>
                <Route path="/home" component={HomePage}/>
                <Route exact path="/menu" component={()=>
                <Menu dishes={this.state.dishes}/>}/>    
                <Redirect to="/home"/>
            }

                </Switch>
                <Footer />
                <div>
                    ...Ayer me dijiste que tú me querías, pero todo fue mentira
	  </div>
            </div>

        );
    }
}

export default Main;
