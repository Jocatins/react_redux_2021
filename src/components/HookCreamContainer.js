import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCream } from "../redux";

function HookCreamContainer() {
  const numOfCreams = useSelector((state) => state.cream.numOfCreams);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Hook Container Creams - {numOfCreams} </h3>
      <button onClick={() => dispatch(buyCream())}>Buy Creams</button>
    </div>
  );
}

export default HookCreamContainer;
