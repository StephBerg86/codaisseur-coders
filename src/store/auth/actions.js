import API_URL from "../.././config";
import axios from "axios";

function userLoggedIn(token, profile) {
  return {
    type: "USER_LOGGEDIN",
    payload: token,
    profile,
  };
}

export function login(email, password) {
  // Return the thunk itself, i.e. a function
  return async function thunk(dispatch, getState) {
    // TODO:
    // make a POST API request to `/login`
    try {
      const response = await axios.post(`${API_URL}/login`, {
        email: email,
        password: password,
      });
      const token = response.data.jwt;
      console.log("hier?", response);
      dispatch(userLoggedIn(token));

      const res = await axios.get(`${API_URL}/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("res.data", res.data);
      dispatch(userLoggedIn(res.data));

      //it saves the access token to local storage.
      const stringToken = JSON.stringify(token);
      localStorage.setItem("token", stringToken);
    } catch (error) {
      console.log(error);
    }
  };
}
