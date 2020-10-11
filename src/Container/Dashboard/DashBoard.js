import React, { useState } from "react";
import { Layout, Modal, Button } from "antd";
import SideBar from "../../Component/Sidebar/SideBar";
import Header from "../../Component/Header/Header";
import Home from "../../Component/Home/Home";
import { Route, useRouteMatch } from "react-router-dom";
import Admin from "../../Component/Admin/Admin";
import { Switch } from "react-router-dom";
import { connect } from "react-redux";
import ModalComponent from "../../Component/ModalComponent";
import {
  mapDispatchToProps,
  mapStateToProps,
} from "../../redux/maps/headerMap";
import Cart from "../../Component/Cart/Cart";

const { Content } = Layout;

const DashBoard = (props) => {
  const [toggle, setToggle] = useState(false);
  const { path, url } = useRouteMatch();

  const routes = [{ path: `${path}/home` }, { path: `${path}/admin` }];

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  const handleOk = (product) => {
    props.addToCart(product);
    props.setCount({ value: 1, price: product.price });
  };

  const handleCancel = () => {
    props.setId(-1);
  };

  const checkDisable = () => {
    if (props.id === -1) return false;
    console.log("From DashBoard", props.check, props.id);
    return props.check;
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
            backgroundColor: "white",
            padding: toggle ? "2rem 1.5rem" : "0",
          }}
        >
          <Cart />
        </div>
      }
      <Modal
        visible={props.id !== -1}
        title={props.id !== -1 && props.product?.title}
        onCancel={handleCancel}
        footer={[
          <Button key="b1" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button
            key="b2"
            type="primary"
            onClick={() => handleOk(props.product)}
            disabled={checkDisable()}
          >
            Add to cart
          </Button>,
        ]}
      >
        <ModalComponent product={props.product} />
      </Modal>
      <Layout>
        <Header clicked={handleToggle} />
        <Content>
          <Switch>
            <Route
              path={`${path}/home`}
              render={(props) => <Home {...props} />}
            />
            <Route path={`${path}/admin`} component={Admin} />
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);
