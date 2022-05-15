import React from "react";
import { setUser, logout, selectUser } from "../store/count/userSlice";
import { useDispatch, useSelector } from "react-redux";

function Login() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const logintoApp = () => {
    dispatch(setUser({ username: "Durai", age: "22" }));
  };
  return (
    <div>
      <h1>I am a login </h1>
      <h2>Welcome {user.username}</h2>
      <h2>u r age is {user.age}</h2>
      <button onClick={logintoApp}>Login</button>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
}

export default Login;
