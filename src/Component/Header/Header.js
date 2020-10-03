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
        <Badge count={0} showZero>
          <Icon Value={Ri.RiShoppingCart2Fill} styles="toggle" />
        </Badge>
      </div>

      <Typography.Title
        level={3}
        style={{ paddingLeft: "12px", paddingTop: "8px" }}
      >
        {props.title}
      </Typography.Title>
    </div>
  );
}

export default connect(mapHeaderStateToProps, null)(Header);
