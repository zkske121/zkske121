import { ADD_RECORD } from './constant';

function addRecordAction(userList, targetList, motionList) {
    return {
        type: ADD_RECORD,
        value: {
            userList,
            targetList,
            motionList
        }
    }
}

export {
    addRecordAction
}