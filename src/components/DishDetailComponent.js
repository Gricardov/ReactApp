import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {

        super(props);

    }

    render() {

        const comments=this.props.dish.comments.map((comment)=> {

            return(

                <div key={comment.id}>
                <p>{comment.comment}</p>
                <p>Said by: {comment.author} on {new Intl.DateTimeFormat('en-US',{year:'numeric', month:'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</p>                
                </div>

            );


        });

        return (

            

            <div className="container">
                Food's detail

            <div className="row">
                    <div className="col-12 col-md-5 m-1 mt-3">
                        <Card>
                            <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
                            <CardBody>
                                <CardTitle>{this.props.dish.name}</CardTitle>
                                <CardText>{this.props.dish.description}</CardText>

                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1 mt-3">
                        <h2>Comments</h2>
                        {comments}
                    </div>
                </div>
            </div>
        );
    }

}

export default DishDetail;