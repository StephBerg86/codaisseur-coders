import React, { useEffect } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import LoginPage from "./pages/LoginPage";
import ToolBar from "./components/Toolbar";
import { useDispatch } from "react-redux";
import { bootstrapLoginState } from "./store/auth/actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bootstrapLoginState);
  }, [dispatch]);

  return (
    <div className="App">
      <ToolBar />
      <Switch>
        <Route path="/post/:id" component={PostPage} />
        <Route path="/login" component={LoginPage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
