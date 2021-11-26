import React from "react";
import { buyCream } from "../redux";
import { connect } from "react-redux";

function CreamContainer(props) {
  return (
    <div>
      <h3>Number of Creams - {props.numOfCreams}</h3>
      <button onClick={props.buyCream}>Buy Creams</button>
    </div>
  );
}
//In larger apps, mapStateToProps will be in the selectors file return state information from the redux store

//To access the redux state, you define mapStateToProps
const mapStateToProps = (state) => {
  return {
    numOfCreams: state.cream.numOfCreams,
  };
};
//To access the redux actions, you define mapDispatchToProps
const mapDispatchToProps = (dispatch) => {
  return {
    //map action creators to prop
    buyCream: () => dispatch(buyCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreamContainer);
