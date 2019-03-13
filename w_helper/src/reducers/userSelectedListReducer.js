import { SELECT_USER, UNSELECT_USER, CLEAR_SELECT_USER } from '../actions/constant';

const _state = [];

export default function (state = _state, action) {
    switch(action.type) {
        case SELECT_USER:
            if (state.indexOf(action.userId) === -1) {
                state.push(action.userId);
            }
            return state.slice().sort();
        case UNSELECT_USER:
            const index = state.indexOf(action.userId);
            if (index !== -1) {
                state.splice(index, 1);
            }
            return state.slice();
        case CLEAR_SELECT_USER: 
            return [];
        default:
            return state;
    }
}