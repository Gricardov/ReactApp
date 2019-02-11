import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import MenuBar from './MenuBar';
import { DISHES } from '../shared/dishes';
import { OPTIONS } from '../shared/options';
import DishDetail from './DishDetailComponent';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {

            dishes: DISHES,
            options: OPTIONS,
            selectedDish: 0
        };

    }


    onDishSelect(dishId) {

        this.setState({ selectedDish: dishId });

    }

    render() {
        return (
            <div>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Disglosia xdd</NavbarBrand>
                    </div>
                </Navbar>
                <MenuBar options={this.state.options} 
                
                 
                
                />
                <Menu dishes={this.state.dishes} onClick={

                    (dishId) => this.onDishSelect(dishId)

                } />
                <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
                <div>
                    ...Ayer me dijiste que tú me querías, pero todo fue mentira
	  </div>
            </div>

        );
    }
}

export default Main;
