import React, { Suspense } from "react";
import { Spin } from "antd";
const withLazy = (WrapperComponent) => {
  return (props) => {
    return (
      <Suspense
        fallback={
          <div
            style={{
              width: "100%",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Spin size="large" />
          </div>
        }
      >
        <WrapperComponent {...props} />
      </Suspense>
    );
  };
};

export default withLazy;
