import { Badge } from "antd";
import React from "react";
import * as Ri from "react-icons/ri";
import { connect } from "react-redux";
import { mapHeaderStateToProps } from "../../redux/maps/headerMap";
import Icon from "../Icon";
import "./Header.css";

function Header(props) {
  return (
    <div className="container">
      <div onClick={props.clicked}>
        <Badge
          count={props.count}
          showZero
          style={{ background: "#1890ff", border: "0px" }}
        >
          <Icon Value={Ri.RiShoppingCart2Fill} styles="toggle" />
        </Badge>
      </div>
      <div style={{ color: "white", fontSize: "2rem", fontWeight: "bold" }}>
        Shopping Cart
      </div>
      <div style={{ color: "white", fontSize: "1.5rem", fontWeight: "bold" }}>
        {props.title}
      </div>
    </div>
  );
}

export default connect(mapHeaderStateToProps, null)(Header);
