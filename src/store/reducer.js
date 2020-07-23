import { combineReducers } from "redux";
import feedSliceReducer from "./feed/reducers";
import postPageSliceReducer from "../store/postPage/reducer";

const reducer = combineReducers({
  feed: feedSliceReducer,
  postPage: postPageSliceReducer,
});

export default reducer;
