import React from "react";

function Logout() {
  localStorage.clear();
  window.location.pathname = "/login";
  return <></>;
}

export default Logout;
