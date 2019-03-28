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

    dispatch(promosLoading());

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

export const fetchLeaders=()=>(dispatch)=>{

    dispatch(leadersLoading())

    return fetch(baseURL+'leaders')
            .then(response=>{

                if(response.ok){

                    return response;

                } else {

                    var error = new Error('Error ' + response.status +
                    ': ' + response.statusText)
                    error.response=response;
                    throw error;

                }


            }, error=>{

                var errMess=new Error(error.message);
                throw errMess;

            })
            .then (response=>response.json())
            .then(leaders=>dispatch(addLeaders(leaders)))
            .catch(error=>dispatch(leadersFailed(error.message)))


}

export const postComment = (dishId, rating, author, comment) =>(dispatch)=> {

    const newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment

    }
    newComment.date = new Date().toISOString();
    return fetch(baseURL + 'comments', {

        method: 'POST',
        body: JSON.stringify(newComment),
        headers: {
            'Content-type': 'application/json'
        },
        credentials: 'same-origin'
    })
        .then(response => {

            if (response.ok) {

                return response;

            }

            else {

                var error = new Error('Error ' + response.status +
                    ': ' + response.statusText);
                error.response = response;
                throw error;

            }

        },
            error => {
                var errMess = new Error(error.message);
                throw errMess;

            })
            .then(response=>response.json())
            .then(response=>dispatch(addComment(response)))
            .catch(error=>{console.log('Post comments', error.message)
                alert('Your comment could not be posted\nError: '+error.message)
            })

}

export const postFeedback=(firstName, lastName, telNum, eMail, agree, contactType,message)=>(dispatch)=>{
    
    dispatch(addFeedbackLoading());

    const newFeedback={

        firstname:firstName,
        lastname:lastName,
        telnum:telNum,
        email:eMail,
        agree:agree,
        contactType:contactType,
        message:message

    }
    newFeedback.date=new Date().toISOString();
    console.log("Esto llega "+JSON.stringify(newFeedback));

    return fetch(baseURL+'feedback',{
        method:'POST',
        body:JSON.stringify(newFeedback),
        headers: {
            'content-type':'application/json'
        },
        credentials: 'same-origin'

    })

    .then (response=>{

        if(response.ok){

            return response;

        } else {

            var error = new Error('Error ' + response.status +
            ': ' + response.statusText);
            error.response=response;
            throw error;
        }

    }, error=>{

        var errMess= new Error(error.message);
        throw errMess;

    })

    .then(response=>response.json())
    .then(feedback=>{

        dispatch(addFeedback(feedback));
        alert('Thanks for your feedback:\n'+JSON.stringify(feedback));

    })
    .catch(error=>{
        addFeedbackFailed(error.message);
        console.log('Post comments', error.message);
        alert('Your comment could not be posted\nError: '+error.message);

    })

}

// Events the dispatcher calls

export const addComment = (comment) => ({

    type: ActionTypes.ADD_COMMENT,
    payload: comment 

});

export const addFeedback = (feedback)=>({

    type: ActionTypes.ADD_FEEDBACK,
    payload: feedback

})

export const addFeedbackLoading=()=>({

    type: ActionTypes.ADD_FEEDBACK_LOADING

})

export const addFeedbackFailed=(errmess)=>({

    type: ActionTypes.ADD_FEEDBACK_FAILED,
    payload: errmess

})

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

})

export const promosFailed = (errmess) => ({

    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
})

export const leadersLoading=()=>({

    type: ActionTypes.LEADERS_LOADING
    
})

export const addLeaders=(leaders)=>({

    type: ActionTypes.ADD_LEADERS,
    payload: leaders

})

export const leadersFailed=(errmess)=>({

    type: ActionTypes.LEADERS_FAILED,
    payload: errmess

})