import React from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import { template } from 'handlebars';
import { AST_PropAccess } from 'terser';



function RenderComments({ comments }) {


    const component = comments.map((comment) => {

        return (

            <div key={comment.id}>
                <p>{comment.comment}</p>
                <p>Said by: {comment.author} on {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
            </div>

        )

    });

    return (
        component
    );



}

function RenderDish({ dish }) {
    return (
        <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>

            </CardBody>
        </Card>
    );
}

const DishDetail = function Details(props) {

    return (

        <div className="container">
            Food's detail

        <div className="row">
                <div className="col-12 col-md-5 m-1 mt-3">
                    <RenderDish dish ={props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1 mt-3">
                <h2>Comments</h2>

                    <RenderComments comments={props.dish.comments} />
                </div>
            </div>
        </div>
    );

}

export default DishDetail;