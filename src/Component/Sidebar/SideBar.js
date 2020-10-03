import React from "react";
import { Layout, Menu, Tooltip } from "antd";
import Icon from "../Icon";
import { NavLink } from "react-router-dom";
import * as RiIcon from "react-icons/ri";
import "./SideBar.css";
const { Sider } = Layout;

function SideBar({ routes, url }) {
  return (
    <Sider className="Body">
      <div className="menu-container">
        <Menu theme="dark" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <Tooltip placement="right" title="Home">
              <NavLink to={routes[0].path}>
                <Icon Value={RiIcon.RiHome7Fill} styles="icon" />
              </NavLink>
            </Tooltip>
          </Menu.Item>
          <Menu.Item key="2">
            <Tooltip placement="right" title="Admin">
              <NavLink to={routes[1].path}>
                <Icon Value={RiIcon.RiAdminFill} styles="icon" />
              </NavLink>
            </Tooltip>
          </Menu.Item>
        </Menu>
      </div>
      <div>
        <Tooltip placement="right" title="Logout">
          <NavLink to="/logout">
            <Icon Value={RiIcon.RiLogoutBoxLine} styles="icon_logout" />
          </NavLink>
        </Tooltip>
      </div>
    </Sider>
  );
}

export default SideBar;
