import { ADD_RECORD } from '../actions/constant';

const _state = [
    {
        userList: [0],
        targetList: [1],
        motionList: [0]
    }
];

export default function(state = _state, action) {
    switch (action.type) {
        case ADD_RECORD:
            const { userList = [], targetList = [], motionList = []} = action.value;
            state.push({
                userList,
                targetList,
                motionList
            });
            return state;
        default:
            return state;
    }
}