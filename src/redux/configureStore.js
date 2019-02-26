import {createStore, combineReducers} from 'redux';
import {Dishes } from './dishes';
import {Comments } from './comments';
import {Promotion, Promotions } from './promotions';
import {Leaders } from './leaders';

export const ConfigureStore=()=>{

    return createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        })
    );

}