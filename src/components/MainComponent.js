import React, { Component } from 'react';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';

import DishDetail from './DishDetailComponent';
import AboutusComponent from './AboutusComponent';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import {addComment} from '../redux/ActionCreators';

// To receive props
const mapStateToProps = (state) => {
    return {

        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders

    }

}

// To execute remote methods
const mapDispatchToProps=(dispatch) => ({

    addComment: (dishId, rating, author, comment)=> dispatch(addComment(dishId, rating, author, comment))

});

class Main extends Component {
    constructor(props) {
        super(props);

    }



    render() {

        const HomePage = () => {

            return (

                <Home
                    dish={this.props.dishes.filter((dish) => {

                        return dish.featured

                    })[0]}

                    promotion={this.props.promotions.filter((promo) => {

                        return promo.featured

                    })[0]}

                    leader={this.props.leaders.filter((leader) => {

                        return leader.featured

                    })[0]}

                />

            );
        }

        const DishId = ({ match }) => {
            return (

                <DishDetail dish={this.props.dishes.filter((dish) =>

                    dish.id === parseInt(match.params.dishId, 10)

                )[0]}

                    comments={this.props.comments.filter((comment) =>

                        comment.dishId === parseInt(match.params.dishId, 10)

                    )}
                    addComment={this.props.addComment}

                />



            )


        }

        return (
            <div>
                <Header />

                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/menu" component={() =>
                        <Menu dishes={this.props.dishes} />} />
                    <Route exact path="/aboutus" component={() =>
                        <AboutusComponent leaders={this.props.leaders} />} />
                    <Route path="/menu/:dishId" component={DishId} />
                    <Route exact path="/contactus" component={Contact} />
                    <Redirect to="/home" />
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
