import * as ActionTypes from './ActionTypes';

export const Feedback=(state={

    isLoading:true,
    errMess:null,
    feedback:[]

}, action)=>{

    switch(action.type){

        case ActionTypes.ADD_FEEDBACK:
            var feedback=action.payload
            return {...state, isLoading:false, errMess:null, feedback:state.feedback.concat(feedback)}
        case ActionTypes.ADD_FEEDBACK_LOADING:
            return {...state, isLoading:true, errMess:null, feedback:[]}
        case ActionTypes.ADD_FEEDBACK_FAILED:   
            return {...state, isLoading:false, errMess:action.payload, feedback:[]}
        default:
        return state;

    }

}