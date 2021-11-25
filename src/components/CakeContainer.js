import React from "react";
import { buyCake } from "../redux";
import { connect } from "react-redux";

function CakeContainer(props) {
  return (
    <div>
      <h3>Number of Cakes - {props.numOfCakes}</h3>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
}
//In larger apps, mapStateToProps will be in the selectors file return state information from the redux store

//To access the redux state, you define mapStateToProps
const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  };
};
//To access the redux actions, you define mapDispatchToProps
const mapDispatchToProps = (dispatch) => {
  return {
    //map action creators to prop
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
