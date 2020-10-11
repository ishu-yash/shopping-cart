import React, { useState } from "react";
import { connect } from "react-redux";
import { mapCartDispatchToProps } from "../../../redux/maps/headerMap";

function CartItem({ product, ...props }) {
  const [count, setCount] = useState(1);

  function* handleCount(val) {
    yield props.setCount({
      value: val,
      price: val === 1 ? product.price : -1 * product.price,
    });
    yield setCount((count) => count + val);
  }
  const handleHandleCount = (val) => {
    const func = handleCount(val);
    func.next();
    func.next();
  };
  return (
    <div
      style={{
        width: "180px",
        display: "flex",
        flexFlow: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "white",
        boxShadow: "0px 2px 10px 1px rgba(0,0,0,0.45)",
        borderRadius: "4px",
        marginBottom: "32px",
      }}
    >
      <img
        src={product.image}
        alt="dbf"
        style={{ objectFit: "cover", height: "120px", marginTop: "10px" }}
      />
      <div style={{ paddingTop: "2px", textAlign: "center" }}>
        {product.title}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "100%",
          paddingTop: "2px",
        }}
      >
        <button
          style={{
            width: "32px",
            height: "24px",
            color: "white",
            background: "#1890ff",
            textAlign: "center",
            border: "none",
          }}
          onClick={() => handleHandleCount(-1)}
        >
          -
        </button>
        <div style={{ fontSize: "20px" }}>{count}</div>
        <button
          style={{
            width: "32px",
            height: "24px",
            color: "white",
            background: "#1890ff",
            textAlign: "center",
            border: "none",
          }}
          onClick={() => handleHandleCount(1)}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default connect(null, mapCartDispatchToProps)(CartItem);
