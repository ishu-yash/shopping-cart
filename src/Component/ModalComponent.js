import React from "react";

function ModalComponent({ product }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "top",
      }}
    >
      <img
        src={product?.image}
        alt="modal"
        style={{
          objectFit: "cover",
          width: "200px",
          height: "300px",
          background: "gray",
          marginRight: "12px",
        }}
      />
      <p>{product?.description}</p>
    </div>
  );
}

export default ModalComponent;
