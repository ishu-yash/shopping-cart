import React, { useEffect } from "react";
import { mapHeaderDispatchToProps } from "../../redux/maps/headerMap";
import { connect } from "react-redux";

function Home(props) {
  useEffect(() => {
    props.setTitle("Home");
  }, []);
  return <h1>Home</h1>;
}
export default connect(null, mapHeaderDispatchToProps)(Home);
