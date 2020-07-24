import React from "react";
import { Link } from "react-router-dom";
import { selectLoggedinUser } from "../store/auth/selectors";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/auth/actions";

export default function Toolbar() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectLoggedinUser);
  //console.log("user", isLoggedIn);

  return isLoggedIn === null ? (
    <div className="ToolBar">
      <Link to="/login">Login</Link>
    </div>
  ) : (
    <div className="ToolBar">
      <p>Logged in as: {isLoggedIn.name}</p>
      <button onClick={() => dispatch(logout)}>Logout</button>
    </div>
  );
}
