import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import DishDetail from './DishDetailComponent';

class Menu extends Component {

	constructor(props) {

		super(props);

		// Properties
		this.state = {
			selectedDish: null

		}
		console.log('Menu component, constructor is invoked')
	}

	onDishSelect(dish) {

		this.setState({ selectedDish: dish });

	}

	renderDish(dish) {

		if (dish != null) {
			return (
				<DishDetail dish={this.state.selectedDish}/>
				/*<Card>
					<CardImg width="100%" src={dish.image} alt={dish.name} />
					<CardBody>
						<CardTitle>{dish.name}</CardTitle>
						<CardText>{dish.description}</CardText>
					</CardBody>

				</Card>*/
			)
		} else {

			return (<div></div>)

		}

	}



	render() {
		console.log('Menu component, render is invoked')

		const menu = this.props.dishes.map((dish) => {
			// For every dish, I'm going to return a layout for the dish
			return (

				// key is used to identify each item uniquely
				<div key={dish.id} className="col-12 col-md-5 m-1">
					<Card onClick={

						() => this.onDishSelect(dish)

					}>
						<CardImg width="100%" src={dish.image} alt={dish.name} />
						<CardImgOverlay>
							<CardTitle>{dish.name}</CardTitle>
						</CardImgOverlay>
					</Card>
				</div>

			);

		});


		return (

			<div className="container">
				<div className="row">
					{menu}
				</div>
				<div className="row">
					{this.renderDish(this.state.selectedDish)}
				</div>
			</div>

		);

	}

	componentDidMount() {

		console.log('Menu component, componentDidMount is invoked')


	}


}

export default Menu;