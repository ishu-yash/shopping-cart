import React from "react";
import { Typography, Badge } from "antd";
import "./Header.css";
import { connect } from "react-redux";
import { mapHeaderStateToProps } from "../../redux/maps/headerMap";
import Icon from "../Icon";
import * as Ri from "react-icons/ri";

function Header(props) {
  return (
    <div className="container">
      <div onClick={props.clicked}>
        <Badge
          count={0}
          showZero
          style={{ background: "#1890ff", border: "0px" }}
        >
          <Icon Value={Ri.RiShoppingCart2Fill} styles="toggle" />
        </Badge>
      </div>
      <Typography.Title level={2} style={{ color: "white" }}>
        Shopping Cart
      </Typography.Title>
      <div
        style={{
          width: "120px",
          marginRight: "96px",
          textAlign: "center",
        }}
      >
        <Typography.Title level={3} style={{ color: "white" }}>
          {props.title}
        </Typography.Title>
      </div>
    </div>
  );
}

export default connect(mapHeaderStateToProps, null)(Header);
