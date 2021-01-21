import { combineReducers } from "redux";
import imagesReducer from './images'

// For scalable application you will need more reducers that is why we used combineReducers
export default combineReducers({imagesState: imagesReducer})