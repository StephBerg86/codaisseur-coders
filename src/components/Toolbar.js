import React from "react";
import { Link } from "react-router-dom";
import { selectLoggedinUser } from "../store/auth/selectors";
import { useSelector } from "react-redux";

export default function Toolbar() {
  const isLoggedIn = useSelector(selectLoggedinUser);
  console.log("user", isLoggedIn);

  return isLoggedIn === null ? (
    <div className="ToolBar">
      <Link to="/login">Login</Link>
    </div>
  ) : (
    <div className="ToolBar">
      <button>Link to logout will follow</button>
    </div>
  );
}

// return (
//   isLoggedIn ?
//   <div className="authentication">
//     <button >Logout </button>
//   </div>
//   :
//   <button href='http://localhost:8888'>Login </button>
//  )

// Either a <Link>s to the login page, if the user is not logged in
// Or the currently logged in user's name, as well as a
// "logout" button (which we'll implement later)
