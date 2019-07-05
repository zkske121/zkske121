import { SELECT_MOTION } from '../actions/constant';

const _state = [
    {
        motionId: 1,
        motionName: '',
        motionType: 1,
        isJustice: true
    }
];

export default function (state = _state, action) {
    switch (action.type) {
        case SELECT_MOTION:
            return action.value;
        default:
            return state;
    }
}