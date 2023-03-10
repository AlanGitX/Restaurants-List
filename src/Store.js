import {createStore,combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import { homeReducer } from "./reducers/homeReducer"

const reducers = combineReducers ({
    restaurantReducer:homeReducer     

})

const Middleware = [thunk]

const store = createStore(reducers, applyMiddleware(...Middleware))

export default store