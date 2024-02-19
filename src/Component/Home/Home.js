import React, { useEffect } from "react";
import { connect } from "react-redux";
import { mapHeaderDispatchToProps } from "../../redux/maps/headerMap";
import ItemCard from "./ItemCard/ItemCard";

function Home({ setTitle, getImages, ...props }) {
  // setTitle("Home");
  useEffect(() => {
    setTitle("Home");
  }, [setTitle]);
  useEffect(() => {
    getImages();
  }, [getImages]);
  const list = props.filteredList;
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          height: "100vh",
          flexWrap: "wrap",
          overflowY: "auto",
          overflowX: "hidden",
          padding: "12px",
          paddingBottom: "10rem",
        }}
      >
        {list.length > 0
          ? list.map((cur) => (
              <ItemCard id={cur._id} product={cur} key={cur._id} />
            ))
          : "Nothing to show!"}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    images: state.setImages.images,
    filteredList: state.setImages.filteredList,
    message: state.setImages.message,
  };
};
export default connect(mapStateToProps, mapHeaderDispatchToProps)(Home);
