const { default: reducer } = require("../reducer");

const initialState = {
  loading: true,
  posts: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "": {
      // => Ask yourself: what is action.payload?
      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
}
