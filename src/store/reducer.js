import { combineReducers } from "redux";
import feedSliceReducer from "./feed/reducers";

const reducer = combineReducers({
  feed: feedSliceReducer,
  // etc.
});

export default reducer;
