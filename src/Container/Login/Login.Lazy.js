import React from "react";
import withLazy from "../../HOC/withLazy";

const LoginLazy = withLazy(React.lazy(() => import("./Login")));

export default LoginLazy;
