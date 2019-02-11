import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Menu extends Component {

	constructor(props) {

		super(props);

	
		console.log('Menu component, constructor is invoked')
	}


	render() {
		console.log('Menu component, render is invoked')

		const menu = this.props.dishes.map((dish) => {
			// For every dish, I'm going to return a layout for the dish
			return (

				// key is used to identify each item uniquely
				<div key={dish.id} className="col-12 col-md-5 m-1">
					<Card onClick={

						()=> this.props.onClick(dish.id)

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
				
			</div>

		);

	}

	componentDidMount() {

		console.log('Menu component, componentDidMount is invoked')


	}


}

export default Menu;