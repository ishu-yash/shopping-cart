import React, { useEffect } from "react";
import { mapHeaderDispatchToProps } from "../../redux/maps/headerMap";
import { connect } from "react-redux";
function Admin({ setTitle, ...props }) {
  useEffect(() => {
    setTitle("My Orders");
  }, [setTitle]);
  return <h1>Admin</h1>;
}

export default connect(null, mapHeaderDispatchToProps)(Admin);
