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
    case "USER_LOGOUT": {
      return {
        ...initialState,
        token: null,
      };
    }
    default: {
      return state;
    }
  }
}

//Extend the reducer by adding a switch case that deals with the
//auth/logout action appropriately, and put the key you used to save
//your token to localstorage in the thunk.
