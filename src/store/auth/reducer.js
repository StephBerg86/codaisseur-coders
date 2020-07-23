const initialState = {
  me: null, // the logged-in user
  accessToken: null,
};

export default function userSliceReducer(state = initialState, action) {
  switch (action.type) {
    case "USER_LOGGEDIN": {
      return {
        ...state,
        me: action.payload,
        accessToken: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
