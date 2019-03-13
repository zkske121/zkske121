import { SELECT_MOTION } from '../actions/constant';

const _state = 0;

export default function (state = _state, action) {
    switch (action.type) {
        case SELECT_MOTION:
            return action.value;
        default:
            return state;
    }
}