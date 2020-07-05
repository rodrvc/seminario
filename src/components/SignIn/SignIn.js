import { Form, Input, Button, Checkbox, Card } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import "./SignIn.css";

const SignIn = () => {
	const onFinish = (values) => {
		console.log("Received values of form: ", values);
	};

	return (
		<Card
			title="INGRESA!"
			headStyle={{
				color: "#fff",
				textAlign: "center",
				background: "#FFAA00",
			}}
		>
			<Form
				name="normal_login"
				className="login-form"
				initialValues={{
					remember: true,
				}}
				onFinish={onFinish}
				size={"large"}
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
					<a className="login-form-forgot block" href="">
						Olvide mi contraseña
					</a>
				</Form.Item>

				<Form.Item>
					<Button
						type="primary"
						htmlType="submit"
						className="login-form-button"
						block
					>
						Log in
					</Button>
					O <a href="">Registrate Ahora!</a>
				</Form.Item>
			</Form>
		</Card>
	);
};

export default SignIn;
