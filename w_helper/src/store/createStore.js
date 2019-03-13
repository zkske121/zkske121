import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { createLogger } from 'redux-logger';
import { countReducer } from '../reducers/countReducer';

const logger = createLogger({
    duration: true
});

const enhancer = compose(
    applyMiddleware(logger),
);

export default (data = {}) => {
    const rootReducer = combineReducers({
        count: countReducer
    });

    return createStore(rootReducer, data, enhancer);
}