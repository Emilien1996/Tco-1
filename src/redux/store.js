import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import {taskReducer} from './reducers/task-reducer'



const rootReducer = combineReducers({
	taskReducerState:taskReducer,
})

const middlewares = [thunk]

const store = createStore(
	rootReducer,
	compose(applyMiddleware(...middlewares))
)