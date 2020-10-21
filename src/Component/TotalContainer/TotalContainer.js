import React from "react";
import "./TotalContainer.css";
import { Typography } from "antd";

function TotalContainer(props) {
  return (
    <div
      style={{ paddingBottom: props.isCart ? "20px" : "0px", ...props.style }}
    >
      <div className="total-container">
        <Typography.Title level={4}>Current Total -</Typography.Title>
        <Typography.Title level={4} style={{ marginBottom: "36px" }}>
          {`${props.total ? props.total.toFixed(2) : 0.0}`}
        </Typography.Title>
      </div>
    </div>
  );
}

export default TotalContainer;
