import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import locationReducer from "./reducers/location_reducer";

var intialState = {};
const checkInitialState = async () => {
    try {
        intialState = await sessionStorage.getItem("locations_on_map") ? JSON.parse(sessionStorage.getItem("locations_on_map")) : {};
    } catch (error) {
        console.log('getError', error)
    }
}

checkInitialState();

const saver = (store) => next => action => {
    let stateToSave = store.getState();
    sessionStorage.setItem("locations_on_map", JSON.stringify({ ...stateToSave }))
    return next(action);
}

const rootReducer = combineReducers({
    locations: locationReducer
});

const store = createStore(rootReducer, intialState, applyMiddleware(thunk, saver));

export default store;