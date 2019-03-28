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

import {postComment,postFeedback, fetchDishes, fetchComments, fetchPromos, fetchLeaders} from '../redux/ActionCreators';
import {actions} from 'react-redux-form';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

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

    postComment: (dishId, rating, author, comment)=> dispatch(postComment(dishId, rating, author, comment)),
    postFeedback: (firstName, lastName, telNum, eMail, agree, contactType, message)=>dispatch(postFeedback(firstName, lastName, telNum, eMail, agree, contactType, message)),
    fetchDishes: ()=> {dispatch(fetchDishes())},
    fetchPromos: ()=> {dispatch(fetchPromos())},
    fetchComments: ()=>{dispatch(fetchComments())},
    fetchLeaders: ()=> {dispatch(fetchLeaders())},
    resetFeedbackForm: ()=>{dispatch(actions.reset('feedback'))}
});

class Main extends Component {
   

    componentDidMount() {

        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
        this.props.fetchLeaders();
    }

    render() {

        const HomePage = () => {

            return (

                <Home
                    dish={this.props.dishes.dishes.filter((dish) => {

                        return dish.featured

                    })[0]}

                    dishesLoading={this.props.dishes.isLoading}
                    dishesErrMess={this.props.dishes.errMess}
                   
                    promotion={this.props.promotions.promotions.filter((promo) => {

                        return promo.featured

                    })[0]}
                    promosLoading={this.props.promotions.isLoading}
                    promosErrMess={this.props.promotions.errMess}

                    

                    leader={this.props.leaders.leaders.filter((leader) => {

                        return leader.featured

                    })[0]}
                    leadersLoading={this.props.leaders.isLoading}
                    leadersErrMess={this.props.leaders.errMess}

                />

            );
        }

        const DishId = ({ match }) => {
            return (

                <DishDetail dish={this.props.dishes.dishes.filter((dish) =>

                    dish.id === parseInt(match.params.dishId, 10)

                )[0]}

                    isLoading={this.props.dishes.isLoading}
                    dishErrMess={this.props.dishes.errMess}

                    comments={this.props.comments.comments.filter((comment) =>

                        comment.dishId === parseInt(match.params.dishId, 10)

                    )}
                    commentsErrMess={this.props.comments.errMess}
                    postComment={this.props.postComment}

                />



            )


        }

        return (
            <div>
                <Header />
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                    
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/menu" component={() =>
                        <Menu dishes={this.props.dishes} />} />

                    <Route exact path="/aboutus" component={() =>
                        <AboutusComponent leaders={this.props.leaders.leaders}
                        leadersLoading={this.props.leaders.isLoading}
                        leadersErrMess={this.props.leaders.errMess} />} />
                    
                    <Route path="/menu/:dishId" component={DishId} />

                    <Route exact path="/contactus" component={()=>
                    
                        <Contact resetFeedbackForm={this.props.resetFeedbackForm}
                        postFeedback={this.props.postFeedback} />
                    
                    } />
                    <Redirect to="/home" />
                    }

                </Switch>
                </CSSTransition>
                </TransitionGroup>
                <Footer />
                <div>
                    ...Ayer me dijiste que tú me querías, pero todo fue mentira
	  </div>
            </div>

        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
