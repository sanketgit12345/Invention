import { combineReducers } from "redux";
import mainReducer from "./reducer";

const reducers = combineReducers({
      listReducer:mainReducer
})

export default reducers;