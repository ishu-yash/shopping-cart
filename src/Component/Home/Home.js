import React, { useEffect } from "react";
import { mapHeaderDispatchToProps } from "../../redux/maps/headerMap";
import { connect } from "react-redux";
import ItemCard from "./ItemCard/ItemCard";

function Home({ setTitle, getImages, ...props }) {
  // setTitle("Home");
  useEffect(() => {
    setTitle("Home");
  }, [setTitle]);
  useEffect(() => {
    getImages();
  }, [getImages]);
  const list =
    props.filteredList.length > 0 ? props.filteredList : props.images;
  return (
    <div
      style={{
        marginTop: "6.25rem",
      }}
    >
      <div
        style={{
          height: "600px",
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          overflowY: "scroll",
          overflowX: "hidden",
          padding: "12px",
        }}
      >
        {list.map((cur) => (
          <ItemCard id={cur._id} product={cur} key={cur._id} />
        ))}
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
