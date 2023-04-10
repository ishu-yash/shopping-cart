import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { mapCartDispatchToProps } from "../../../redux/maps/headerMap";
import { useDispatch } from "react-redux";
import actions from "../../../redux/actions/actions";
import actionCreator from "../../../redux/actions/actionCreator";

function CartItem({ product, ...props }) {
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      actionCreator(actions.SET_CART_ITEM_COUNT, {
        id: product._id,
        count: count,
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  function handleCount(val) {
    setCount((count) => count + val);
    props.setCount({
      value: val,
      price: val === 1 ? product.price : -1 * product.price,
    });
  }
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
          onClick={() => handleCount(-1)}
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
          onClick={() => handleCount(1)}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default connect(null, mapCartDispatchToProps)(CartItem);
