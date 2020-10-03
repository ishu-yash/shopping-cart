import React from "react";
import withLazy from "../../HOC/withLazy";

const DashboardLazy = withLazy(React.lazy(() => import("./DashBoard")));

export default DashboardLazy;
