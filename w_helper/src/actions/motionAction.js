import { SELECT_MOTION } from './constant';

function selectMotionAction(value) {
    return {
        type: SELECT_MOTION,
        value
    }
}

export {
    selectMotionAction
}