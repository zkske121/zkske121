import { SELECT_ROLE } from '../actions/constant';

const _state = 0;

export default function (state = _state, action) {
    switch (action.type) {
        case SELECT_ROLE:
            return action.value;
        default:
            return state;
    }
}