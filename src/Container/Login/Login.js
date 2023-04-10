import React, { useState } from "react";
import { Card, Form, Input, Button, Typography } from "antd";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmail = (text) => {
    setEmail(text);
  };
  const handlePassword = (text) => {
    setPassword(text);
  };
  const handleSubmit = () => {
    localStorage.setItem(
      "login_token",
      JSON.stringify({ email: email, password: password })
    );
    props.history.push("/dashboard/home");
  };
  return (
    <div
      style={{
        width: "100%",
        height: "657px",
        background: "gray",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ width: "300px" }}>
        <Card
          bordered={false}
          title={<Typography.Title level={3}>Login</Typography.Title>}
        >
          <Form onFinish={handleSubmit} layout="vertical">
            <Form.Item label="Email">
              <Input
                type="email"
                placeholder="Email Address"
                bordered={false}
                onChange={handleEmail}
              ></Input>
            </Form.Item>
            <Form.Item label="Password">
              <Input
                type="password"
                placeholder="Enter Password"
                bordered={false}
                onChange={handlePassword}
              ></Input>
            </Form.Item>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button type="primary" htmlType="submit">
                Login In
              </Button>
            </div>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default Login;
