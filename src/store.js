import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux'
import reducer from './reducer'
//import createLogger from 'redux-logger';

//const logger = createLogger();
const rootReducer = combineReducers({
    reducer: reducer
})
export default function store(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    );
}