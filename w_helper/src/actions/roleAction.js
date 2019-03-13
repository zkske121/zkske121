import { SELECT_ROLE, USER_SELECT_ROLE } from './constant';

function selectRoleAction(value) {
    return {
        type: SELECT_ROLE,
        value
    }
}

function userSelectRoleAction(userId, roleId) {
    return {
        type: USER_SELECT_ROLE,
        userId,
        value: roleId
    }
}

export {
    selectRoleAction
}