import React from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import { template } from 'handlebars';
import { AST_PropAccess } from 'terser';
import { Link } from 'react-router-dom';
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';

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
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/home">Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <Link to="/menu">Menu</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        {props.dish.name}
					</BreadcrumbItem>
                </Breadcrumb>

                <div className="col-12">
                    <h3>Menu</h3>
                    <hr />
                </div>

            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1 mt-3">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1 mt-3">
                    <h2>Comments</h2>

                    <RenderComments comments={props.comments} />
                </div>
            </div>
        </div>
    );

}

export default DishDetail;