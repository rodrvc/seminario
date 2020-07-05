import { Form, Input, Button, Checkbox, Card } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import React, { useState, isValidElement } from "react";
import { signin } from "../../api/user";
import "./SignIn.css";
import { getFieldId } from "antd/lib/form/util";
import SingUp from "../SingUp";

const SignIn = () => {
	const [form] = Form.useForm();

	const onFinish = async (values) => {
		//console.log("Received values of form: ", values);
		const result = await signin(values);
	};

	const [inputs, setInput] = useState({
		//  borrar despues
		email: "",
		password: "",
	});

	const onchangeInput = (input) => {};
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
				layout="vertical"
				className="login-form"
				initialValues={{
					remember: true,
				}}
				form={form}
				onFinish={onFinish}
				size={"large"}
			>
				<Form.Item
					name="email"
					label="Correo :"
					rules={[
						{
							required: true,
							message: "Ingresa tu email !",
							validateTrigger: "onBlur",
							initialValues: "",
						},
						{
							type: "email",
							message: "Debes ingresar un email valido!",
						},
					]}
					//onBlur={() => form.validateTrigger({ onBlur: "Hi, man!" })}
					validateTrigger="onBlur"
				>
					<Input
						prefix={<UserOutlined className="site-form-item-icon" />}
						placeholder="Correo electronico"
					/>
				</Form.Item>
				<Form.Item
					name="password"
					label="Contraseña"
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
						<Checkbox>Recuerdame</Checkbox>
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
						Ingresar!
					</Button>
					O <a href="">Registrate Ahora!</a>
				</Form.Item>
			</Form>
		</Card>
	);
};

export default SignIn;
