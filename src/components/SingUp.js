import React, { useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "../../src/index.css";
import { signUpApi } from "../api/user";

import { Form, Input, Button, Layout, Tabs, Card, Checkbox } from "antd";

const { Header, Content, Sider } = Layout;
const { TabPane } = Tabs;

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: "${label} is required!",

  types: {
    name: "${label} is not validate nombre",
    email: "${label} Debes ingresar un correo valido",
    number: "${label} Debes ingresar un numero",
    pattern: "${label} No coincide",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
  text: "${label}no es texto",
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

function SingUp() {
  const [input, setInput] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const changeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const onFinish = async (input) => {
    console.log(input);
    const result = await signUpApi(input);
    console.log(result);
  };

  return (
    <>
      <Card
        style={{ border: "0px solid #000", borderRadius: "10px" }}
        title="REGISTRATE"
        headStyle={{
          color: "#fff",
          textAlign: "center",
          background: "#FFAA00",
        }}
      >
        <Form
          className="login-form"
          {...layout}
          //name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
          className="register-form"
          onChange={changeInput}
          size={"large"}
          //onSubmit={register}
        >
          <Form.Item
            name="name"
            label="Nombre"
            rules={[
              {
                required: true,
                pattern: /^[a-z]+$/,
                min: 5,
              },
            ]}
          >
            <Input value={input.name} />
          </Form.Item>
          <Form.Item
            name="lastname"
            label="apellidos"
            rules={[
              {
                required: true,
                pattern: /^[a-z]+$/,
                message: "Los nombres Solo deben tener caracteres",
              },
            ]}
          >
            <Input value={input.lastname} />
          </Form.Item>
          <Form.Item
            name="email"
            label="Correo"
            value={input.email}
            rules={[
              {
                required: true,
                type: "email",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="password" label="Contraseña">
            <Input.Password value={input.password} />
          </Form.Item>
          <Form.Item
            name="repeatPassword"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    "Las conteseñas ingresadas no coinciden!"
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            wrapperCol={{ ...layout.wrapperCol, offset: 6 }}
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject("Should accept agreement"),
              },
            ]}
          >
            <Checkbox>
              I have read the <a href="">agreement</a>
            </Checkbox>
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 6 }}>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              block
            >
              Log in
            </Button>
            o <a href="">ingresa!</a>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
}

export default SingUp;
