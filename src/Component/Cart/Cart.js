import { Button, Divider, Typography } from "antd";
import React from "react";
import * as Gi from "react-icons/gi";
import { connect, useDispatch } from "react-redux";
import actionCreator from "../../redux/actions/actionCreator";
import actions from "../../redux/actions/actions";
import { mapCartStateToProps } from "../../redux/maps/headerMap";
import Icon from "../Icon";
import TotalContainer from "../TotalContainer/TotalContainer";
import "./Cart.css";
import CartItem from "./CartItem/CartItem";

function Cart(props) {
  // console.log("from props", props.productInCart);
  const dispatch = useDispatch();
  const handleOnClick = () => {
    const data = {
      count: props.count,
      total: props.total,
      id: Math.random() * 10 + 10000,
      date: new Date().toLocaleString(),
    };
    dispatch(actionCreator(actions.ADD_TO_ORDER, data));
  };

  const handleEmptyCart = () => {
    const data = {
      value: 0,
      price: 0.0,
    };
    dispatch(actionCreator(actions.RESET_CART));
    dispatch(actionCreator(actions.ASYNC_SET_COUNT, data));
  };
  return (
    <div>
      <Typography.Title
        level={3}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span className="cart-container">
          <Icon Value={Gi.GiShoppingCart} styles="cart-icon" />
          My Cart
        </span>
        <div style={{ display: "flex" }}>
          <Button
            type="primary"
            danger
            onClick={handleOnClick}
            disabled={props.productInCart.length === 0}
          >
            Order
          </Button>
          <Button
            type="primary"
            danger
            onClick={handleEmptyCart}
            style={{ marginLeft: "0.5rem" }}
            disabled={props.productInCart?.length === 0}
          >
            Empty Cart
          </Button>
        </div>
      </Typography.Title>
      <Divider className="divider" />
      <TotalContainer
        total={props.total}
        isCart={true}
        style={{ width: "18rem" }}
      />
      <div
        style={{
          height: "60%",
          overflowY: "scroll",
          display: "flex",
          flexFlow: "column",
          alignItems: "center",
          padding: "20px 0px",
        }}
        className="cart"
      >
        {props.productInCart.map((cur) => (
          <CartItem product={cur} key={cur._id} />
        ))}
      </div>
    </div>
  );
}

export default connect(mapCartStateToProps, null)(Cart);
