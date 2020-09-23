import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import userReducer from "./reducers/user_reducer";
import usersReducer from "./reducers/users_reducer";

const rootReducer = combineReducers({
    user: userReducer,
    users: usersReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;