import React from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import { template } from 'handlebars';
import { AST_PropAccess } from 'terser';
import { Link } from 'react-router-dom';
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';
import CommentForm from './CommentFormComponent';
import {Loading } from './LoadingComponent';
import {baseURL} from '../shared/baseURL';

function RenderComments({ comments, postComment, dishId }) {


    const component = comments.map((comment) => {

        return (

            <div key={comment.id}>
                <p>{comment.comment}</p>
                <p>Said by: {comment.author} on {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
            </div>

        )

    });

    return (
        <div>
        {component}
        <CommentForm dishId={dishId} postComment={postComment}/>
        </div>

    );



}

function RenderDish({ dish }) {
    return (
        <Card>
            <CardImg width="100%" src={baseURL+dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>

            </CardBody>
        </Card>
    );
}

const DishDetail = function Details(props) {

    if (props.isLoading){

return (

    <div className="container">
        <div className="row">
        <Loading />
        </div>
    </div>

);

}

else if (props.errMess){

   return (

        <div className="container">
            <div className="row">
                <h4>{props.errMess}</h4>
            </div>
        </div>
    
    ); 

}
    else if (props.dish!=null) {
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

                    <RenderComments comments={props.comments} 
                    postComment={props.postComment}
                    dishId={props.dish.id} />
                </div>
            </div>
        </div>
    );
    }
}

export default DishDetail;