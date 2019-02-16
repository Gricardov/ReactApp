import React, { Component } from 'react';
import Menu from './MenuComponent';
import MenuBar from './MenuBar';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import { OPTIONS } from '../shared/options';
import DishDetail from './DishDetailComponent';
import AboutusComponent from './AboutusComponent';

import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {

            dishes: DISHES,
            comments: COMMENTS,
            leaders: LEADERS,
            promotions: PROMOTIONS,
            options: OPTIONS,

        };

    }



    render() {

        const HomePage = () => {

            return (

                <Home
                    dish={this.state.dishes.filter((dish) => {

                        return dish.featured

                    })[0]}

                    promotion={this.state.promotions.filter((promo) => {

                        return promo.featured

                    })[0]}

                    leader={this.state.leaders.filter((leader) => {

                        return leader.featured

                    })[0]}

                />

            );
        }

        const DishId = ({ match }) => {
            return (

                <DishDetail dish={this.state.dishes.filter((dish)=>

                    dish.id===parseInt(match.params.dishId,10)

                )[0]}
                
                comments={this.state.comments.filter((comment)=>

                    comment.dishId===parseInt(match.params.dishId,10)

                )}

                />

                
                
            )


        }

        return (
            <div>
                <Header />


                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/menu" component={() =>
                        <Menu dishes={this.state.dishes} />} />
                    <Route exact path="/aboutus" component={()=>
                        <AboutusComponent leaders={this.state.leaders}/> }/>
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

export default Main;
