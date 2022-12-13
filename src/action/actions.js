
import { INCREMENT, DECREMENT } from './types';


export const increaseCounter = () => {

    return {

        type: INCREMENT,
        payload: { like: 'hoaithu', name: 'foden' }

    };

};

export const decreaseCounter = () => {

    return {

        type: DECREMENT,

    };

};