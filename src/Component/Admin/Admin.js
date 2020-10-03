import React, { useEffect } from "react";
import { mapHeaderDispatchToProps } from "../../redux/maps/headerMap";
import { connect } from "react-redux";
function Admin(props) {
  useEffect(() => {
    props.setTitle("Admin");
  }, []);
  return <h1>Admin</h1>;
}

export default connect(null, mapHeaderDispatchToProps)(Admin);
