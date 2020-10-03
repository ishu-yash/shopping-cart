import React, { useState } from "react";
import { Layout, Typography } from "antd";
import SideBar from "../../Component/Sidebar/SideBar";
import Header from "../../Component/Header/Header";
import Home from "../../Component/Home/Home";
import { Route, useRouteMatch } from "react-router-dom";
import Admin from "../../Component/Admin/Admin";
import { Switch } from "react-router-dom";

const { Content } = Layout;

const DashBoard = (props) => {
  const [toggle, setToggle] = useState(false);
  const { path, url } = useRouteMatch();
  const routes = [{ path: `${path}/home` }, { path: `${path}/admin` }];

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };
  return (
    <Layout>
      <SideBar routes={routes} url={url} />
      {
        <div
          style={{
            minWidth: toggle ? "18rem" : "0rem",
            width: toggle ? "18rem" : "0rem",
            transition: "all 200ms ease",
            backgroundColor: "#FAFAFB",
            padding: toggle ? "2rem 1.5rem" : "0",
          }}
        >
          <Typography.Title level={4}>My Cart</Typography.Title>
        </div>
      }
      <Layout>
        <Header clicked={handleToggle} />
        <Content>
          <Switch>
            <Route path={`${path}/home`} component={Home} />
            <Route path={`${path}/admin`} component={Admin} />
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashBoard;
