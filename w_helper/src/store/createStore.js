import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { createLogger } from 'redux-logger';
import { countReducer } from '../reducers/countReducer';
import motionListReducer from '../reducers/motionListReducer';
import recordListReducer from '../reducers/recordListReducer';
import roleListReducer from '../reducers/roleListReducer';
import selectMotionReducer from '../reducers/selectMotionReducer';
import selectRoleReducer from '../reducers/selectRoleReducer';
import userListReducer from '../reducers/userListReducer';
import userSelectedListReducer from '../reducers/userSelectedListReducer';

const logger = createLogger({
    duration: true
});

const enhancer = compose(
    applyMiddleware(logger),
);

export default (data = {}) => {
    const rootReducer = combineReducers({
        count: countReducer,
        motionList: motionListReducer,
        recordList: recordListReducer,
        roleList: roleListReducer,
        selectMotion: selectMotionReducer,
        selectRole: selectRoleReducer,
        userList: userListReducer,
        userSelectedList: userSelectedListReducer
    });

    return createStore(rootReducer, data, enhancer);
}