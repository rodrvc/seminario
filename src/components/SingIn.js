<<<<<<< HEAD
import React, { useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "../../src/index.css";
import { signUpApi } from "../api/user";

import {
  Form,
  Input,
  InputNumber,
  Button,
  Layout,
  Tabs,
  Card,
  Row,
  Col,
} from "antd";

const { Header, Content, Sider } = Layout;
const { TabPane } = Tabs;

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not validate email!",
    number: "${label} is not a validate number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

function SingUp() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const changeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(e.email);
  };

  const onFinish = async (input) => {
    console.log(input);
    const result = await signUpApi(input);
    console.log(result);
  };

  const register = (e) => {};

  return (
    <>
      <Card
        title="INGRESA"
        headStyle={{
          color: "#fff",
          textAlign: "center",
          background: "#FFAA00",
        }}
      >
        <Form
          {...layout}
          onFinish={onFinish}
          validateMessages={validateMessages}
          className="register-form"
          onChange={changeInput}
          //onSubmit={register}
        >
          <Form.Item
            name="name"
            label="Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input value={input.name} />
          </Form.Item>
          <Form.Item
            name="password"
            label="Contraseña"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input value={input.password} />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 14 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
}

export default SingUp;
=======
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const NormalLoginForm = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your Username!",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="">register now!</a>
      </Form.Item>
    </Form>
  );
};

ReactDOM.render(<NormalLoginForm />, mountNode);
>>>>>>> master
