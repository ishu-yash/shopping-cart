import React from "react";
import { IconContext } from "react-icons";

function Icon({ Value, styles }) {
  return (
    <IconContext.Provider value={{ className: styles }}>
      <Value />
    </IconContext.Provider>
  );
}

export default Icon;
