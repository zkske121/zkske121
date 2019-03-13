import { SELECT_USER, UNSELECT_USER, CLEAR_SELECT_USER } from './constant';

function selectUserAction(userId) {
    return {
        type: SELECT_USER,
        value: true,
        userId
    }
}

function unSelectUserAction(userId) {
    return {
        type: UNSELECT_USER,
        value: false,
        userId
    }
}

function clearSelectUserAction() {
    return {
        type: CLEAR_SELECT_USER
    }
}

export {
    selectUserAction,
    unSelectUserAction,
    clearSelectUserAction
}