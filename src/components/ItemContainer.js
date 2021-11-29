import React from "react";
import { connect } from "react-redux";
import { buyCake, buyCream } from "../redux";

function ItemContainer(props) {
  return (
    <div>
      <h3>Item - {props.item}</h3>
      <button onClick={props.itemAction}>Buy Items</button>
    </div>
  );
}
const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.cream.numOfCreams;
  return {
    item: itemState,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatched = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyCream());
  return {
    itemAction: dispatched,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
