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
  return async function thunk(dispatch, getState) {
    try {
      const response = await axios.post(`${API_URL}/login`, {
        email: email,
        password: password,
      });
      const token = response.data.jwt;
      console.log("hier?", response);
      dispatch(userLoggedIn(token));

      const getUser = await axios.get(`${API_URL}/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("res.data", getUser.data);
      dispatch(userLoggedIn(getUser.data));

      //save the access token to local storage.
      localStorage.setItem("token", token);
      console.log(localStorage);
    } catch (error) {
      console.log(error);
    }
  };
}

export async function bootstrapLoginState(dispatch, getState) {
  try {
    // Checks whether an access token exists in local storage.
    const getToken = localStorage.getItem("token");
    console.log(getToken);
    if (getToken === null) {
      return;
    }
    // If so, makes a GET API request to /me to get the user's profile, sending along the access token.
    const getUser = await axios.get(`${API_URL}/me`, {
      headers: {
        Authorization: `Bearer ${getToken}`,
      },
    });
    console.log("get user", getUser);
    // If the profile request succeeds, the thunk dispatches the userLoggedIn action.
    dispatch(userLoggedIn(getUser.data));

    localStorage.getItem("token");
  } catch (error) {
    console.log("test error", error);
  }
}

export function logout(dispatch, getState) {
  dispatch({ type: "USER_LOGOUT" });
  localStorage.removeItem("token");
}
