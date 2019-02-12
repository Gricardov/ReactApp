import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';



function RenderMenuItem({ dish, onClick }) // It can also be just (props)

{

	return (

		<Card onClick={

			() => onClick(dish.id)

		}>
			<CardImg width="100%" src={dish.image} alt={dish.name} />
			<CardImgOverlay>
				<CardTitle>{dish.name}</CardTitle>
			</CardImgOverlay>
		</Card>

	);

}

const Menu = (props) => {

	const menu = props.dishes.map((dish) => {
		// For every dish, I'm going to return a layout for the dish
		return (
	
			// key is used to identify each item uniquely
			<div key={dish.id} className="col-12 col-md-5 m-1">
				<RenderMenuItem dish={dish} onClick={props.onClick}/>
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








export default Menu;