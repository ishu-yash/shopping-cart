import React from "react";
import { connect } from "react-redux";
import { mapCartStateToProps } from "../../redux/maps/headerMap";
import CartItem from "./CartItem/CartItem";
import "./Cart.css";
import { Divider, Typography } from "antd";
import Icon from "../Icon";
import * as Gi from "react-icons/gi";

function Cart(props) {
  // console.log("from props", props.productInCart);
  return (
    <div>
      <Typography.Title level={3}>
        <span className="cart-container">
          <Icon Value={Gi.GiShoppingCart} styles="cart-icon" />
          My Cart
        </span>
      </Typography.Title>
      <Divider className="divider" />
      <div style={{ paddingBottom: "20px" }}>
        <div className="total-container">
          <Typography.Title level={4}>Current Total -</Typography.Title>
          <Typography.Title level={4} style={{ marginBottom: "36px" }}>
            {`${props.total.toFixed(2)}`}
          </Typography.Title>
        </div>
      </div>
      <div
        style={{
          height: "24rem",
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
