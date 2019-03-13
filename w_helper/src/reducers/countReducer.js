import { COUNT_ADD } from '../actions/countAction';
let _state = 0;

function countReducer(state = _state, action) {
    switch(action.type) {
        case COUNT_ADD:
            return state + 1;
        default:
            return state;
    }
}

export {
    countReducer
}