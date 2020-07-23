import { combineReducers } from "redux";
import feedSliceReducer from "./feed/reducers";
import postPageSliceReducer from "../store/postPage/reducer";
import userSliceReducer from "./auth/reducer";

const reducer = combineReducers({
  feed: feedSliceReducer,
  postPage: postPageSliceReducer,
  user: userSliceReducer,
});

export default reducer;
