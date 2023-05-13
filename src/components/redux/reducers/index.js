import { combineReducers } from "redux";
import { createStore } from 'redux'

import changeTheNumber from "./upDown";



const rootReducer = combineReducers({
    changeTheNumber,
})

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


export default rootReducer

export { store }