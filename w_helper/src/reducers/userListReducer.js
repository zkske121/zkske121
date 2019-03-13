import { SELECT_USER, UNSELECT_USER, USER_SELECT_ROLE, CLEAR_SELECT_USER } from '../actions/constant';

const _state = [
    {
        userId: 0,
        roleId: 0,
        userName: '',
        isSelected: false
    }
];

export default function (state = _state, action) {
    switch(action.type) {
        case SELECT_USER:
        case UNSELECT_USER:
            return state.map((v) => {
                if (action.userId === v.userId) {
                    v.isSelected = !!action.value;
                }
                return v;
            });
        case USER_SELECT_ROLE:
            return state.map((v) => {
                if (action.userId === v.userId) {
                    v.roleId = action.value;
                }
                return v;
            });
        case CLEAR_SELECT_USER:
            return state.map(v => {
                v.isSelected = false;
                return v;
            });
        default:
            return state;
    }
}