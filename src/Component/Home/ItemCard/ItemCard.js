import React from "react";
import { Card, Rate } from "antd";
import { connect } from "react-redux";
import "./ItemCard.css";
import { mapDispatchToProps } from "../../../redux/maps/headerMap";

const { Meta } = Card;
function ItemCard(props) {
  const handleOnClick = (val) => {
    props.setId(val);
  };
  return (
    <Card
      hoverable
      style={{
        width: 300,
        height: 365,
        margin: 6,
        display: "flex",
        flexFlow: "column",
        justifyContent: "center",
        padding: "0px",
      }}
      cover={
        <img
          alt="example"
          src={props.product.image}
          style={{
            height: 200,
            width: 150,
            objectFit: "cover",
            marginLeft: "72px",
            marginTop: "20px",
          }}
        />
      }
      key={props.id}
      onClick={() => handleOnClick(props.id)}
    >
      <Meta
        title={props.product.title}
        description={
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "0px",
              padding: "0px",
            }}
          >
            <p
              style={{ fontSize: "28px", color: "black" }}
            >{`$ ${props.product.price} `}</p>
            <Rate
              allowHalf
              disabled
              value={props.product.rate}
              style={{ marginTop: "4px" }}
            />
          </div>
        }
      />
    </Card>
  );
}

export default connect(null, mapDispatchToProps)(ItemCard);
