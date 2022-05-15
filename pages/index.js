import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Login from "../components/Login";
import { increment, decrement, selectcount } from "../store/count/countSlice";

const IndexPage = () => {
  const count = useSelector(selectcount);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Simple implement Next.js With Redux Toolkit</h1>
      <h2>Counted: {count}</h2>
      <hr />
      <button onClick={() => dispatch(increment())}>Increment</button>
      &nbsp;
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <hr />
      <Login />
    </div>
  );
};

export default IndexPage;
