import * as ActionTypes from './ActionTypes';
import { baseURL } from '../shared/baseURL';

// Fetchs called from the MainComponent

export const fetchDishes = () => (dispatch) => {

    dispatch(dishesLoading(true));

    return fetch(baseURL + 'dishes')
        .then(response => {

            if (response.ok) {

                return response;

            }

            else {

                var error = new Error('Error ' + response.status +
                    ': ' + response.statusText)
                error.response = response;
                throw error;

            }

        },
            error => {
                var errMess = new Error(error.message);
                throw errMess;

            })
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)))
        .catch(error => dispatch(dishesFailed(error.message)))


}

export const fetchComments = () => (dispatch) => {

    return fetch(baseURL + 'comments')
        .then(response => {

            if (response.ok) {

                return response;

            }

            else {

                var error = new Error('Error ' + response.status +
                    ': ' + response.statusText)
                error.response = response;
                throw error;

            }

        },
            error => {
                var errMess = new Error(error.message);
                throw errMess;

            })
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(error => dispatch(commentsFailed(error.message)))



}

export const fetchPromos = () => (dispatch) => {

    return fetch(baseURL + 'promotions')
        .then(response => {

            if (response.ok) {

                return response;

            }

            else {

                var error = new Error('Error ' + response.status +
                    ': ' + response.statusText)
                error.response = response;
                throw error;

            }

        },
            error => {
                var errMess = new Error(error.message);
                throw errMess;

            })
        .then(response => response.json())
        .then(promotions => dispatch(addPromos(promotions)))
        .catch(error => dispatch(promosFailed(error.message)))


}

export const addComment = (dishId, rating, author, comment) => ({

    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }

});

// Events the dispatcher calls

export const addDishes = (dishes) => ({

    type: ActionTypes.ADD_DISHES,
    payload: dishes

})

export const dishesLoading = () => ({

    type: ActionTypes.DISHES_LOADING

});

export const dishesFailed = (errmess) => ({

    type: ActionTypes.DISHES_FAILED,
    payload: errmess
})

export const addComments = (comments) => ({

    type: ActionTypes.ADD_COMMENTS,
    payload: comments

})

export const commentsFailed = (errmess) => ({

    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
})


export const addPromos = (promos) => ({

    type: ActionTypes.ADD_PROMOS,
    payload: promos

})

export const promosLoading = () => ({

    type: ActionTypes.PROMOS_LOADING

});

export const promosFailed = (errmess) => ({

    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
})