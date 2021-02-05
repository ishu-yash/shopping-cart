import React from "react";
import { Layout, Menu, Tooltip } from "antd";
import Icon from "../Icon";
import { NavLink } from "react-router-dom";
import * as RiIcon from "react-icons/ri";
import * as Fc from "react-icons/fc";
import "./SideBar.css";
import { connect, useSelector } from "react-redux";
import actions from "../../redux/actions/actions";
import actionCreator from "../../redux/actions/actionCreator";

const { Sider } = Layout;

function SideBar({ routes, ...props }) {
  const filtersApplied = useSelector(
    (state) => state.setImages.filtersApplied || false
  );
  return (
    <Sider className="Body">
      <div className="menu-container">
        <Menu
          theme="dark"
          style={{ background: "rgb(199, 0, 61)" }}
          defaultSelectedKeys={
            window.location.pathname.indexOf("home") !== -1 ? ["1"] : ["2"]
          }
        >
          <Menu.Item key="1">
            <Tooltip placement="right" title="Home">
              <NavLink to={routes[0].path}>
                <Icon Value={RiIcon.RiHome7Fill} styles="icon" />
              </NavLink>
            </Tooltip>
          </Menu.Item>
          <Menu.Item key="2">
            <Tooltip placement="right" title="My Orders">
              <NavLink to={routes[1].path}>
                <Icon Value={RiIcon.RiAdminFill} styles="icon" />
              </NavLink>
            </Tooltip>
          </Menu.Item>
          <Menu.SubMenu
            icon={<Icon Value={RiIcon.RiFilterFill} styles="icon" />}
            style={{
              display:
                window.location.pathname.indexOf("home") === -1
                  ? "none"
                  : "initial",
            }}
          >
            <Menu.SubMenu title="Sizes" key="11">
              <Menu.ItemGroup>
                <Menu.Item key="s1" onClick={() => props.filter("XL")}>
                  XL
                </Menu.Item>
                <Menu.Item key="s2" onClick={() => props.filter("XXL")}>
                  XXL
                </Menu.Item>
                <Menu.Item key="s3" onClick={() => props.filter("X")}>
                  X
                </Menu.Item>
                <Menu.Item key="s4" onClick={() => props.filter("L")}>
                  L
                </Menu.Item>
                <Menu.Item key="s5" onClick={() => props.filter("M")}>
                  M
                </Menu.Item>
                <Menu.Item key="s6" onClick={() => props.filter("LL")}>
                  LL
                </Menu.Item>
                <Menu.Item key="s7" onClick={() => props.filter("ALL")}>
                  ALL
                </Menu.Item>
              </Menu.ItemGroup>
            </Menu.SubMenu>
            <Menu.SubMenu title="Sort By" key="12">
              <Menu.SubMenu title="Rating">
                <Menu.Item key="ss1 c1" onClick={() => props.sortAsc(1)}>
                  Low to High
                </Menu.Item>
                <Menu.Item key="ss1 c2" onClick={() => props.sortDesc(1)}>
                  High to Low
                </Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu title="Price">
                <Menu.Item key="ss2 c1" onClick={() => props.sortAsc(2)}>
                  Low to High
                </Menu.Item>
                <Menu.Item key="ss2 c2" onClick={() => props.sortDesc(2)}>
                  High to Low
                </Menu.Item>
              </Menu.SubMenu>
            </Menu.SubMenu>
          </Menu.SubMenu>
          {filtersApplied && (
            <Menu.Item key="13" onClick={() => props.clearFilters()}>
              <Tooltip placement="right" title="Clear Filters">
                <Icon Value={Fc.FcClearFilters} styles="icon" />
              </Tooltip>
            </Menu.Item>
          )}
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

const mapSiderDispatchToProps = (dispatch) => {
  return {
    sortAsc: (val) => dispatch(actionCreator(actions.SORT_ASC, val)),
    sortDesc: (val) => dispatch(actionCreator(actions.SORT_DESC, val)),
    filter: (val) => dispatch(actionCreator(actions.FILTER_BY_SIZE, val)),
    clearFilters: () => dispatch(actionCreator(actions.CLEAR_FILTERS)),
  };
};
export default connect(null, mapSiderDispatchToProps)(SideBar);
