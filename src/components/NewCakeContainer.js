import React, { useState } from "react";
import { buyCake } from "../redux";
import { connect } from "react-redux";

//payload to action creators buyCake()
function NewCakeContainer(props) {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h3>Number of Cakes - {props.numOfCakes}</h3>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => props.buyCake(number)}>Buy {number} Cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    //map action creators to prop
    buyCake: (number) => dispatch(buyCake(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
