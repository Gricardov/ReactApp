import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import { OPTIONS } from '../shared/options';

export const initialState={

            dishes: DISHES,
            comments: COMMENTS,
            leaders: LEADERS,
            promotions: PROMOTIONS,
            options: OPTIONS

};

export const Reducer=(state=initialState , action)=>{

    return state;

};