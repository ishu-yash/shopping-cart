import React, { useState } from "react";

function CartItem({ product }) {
  const [count, setCount] = useState(1);
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
        >
          +
        </button>
      </div>
    </div>
  );
}

export default CartItem;
