import { Form, Input, Button, Checkbox, Card, notification } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import React, { useState, isValidElement } from "react";
import { Redirect } from "react-router-dom";
import { signin } from "../../api/user";

import { getFieldId } from "antd/lib/form/util";
import SingUp from "../SingUp";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../utils/constans";
import { getAccess } from "../../api/auth";
import "./SignIn.css";

const SignIn = () => {
	const [form] = Form.useForm();

	const onFinish = async (values) => {
		//console.log("Received values of form: ", values);
		const result = await signin(values);



		if (result.error || !result) {
			console.log("HUBO UN ERROR");
			notification.error({
				message: "Ingreso invalido",
				description: "Usuario o contraseña invalidos!",
				placement: "bottomRight",
			});
			reset();
		} else {
			const { accessToken, refreshToken } = result;
			console.log(result);

			if(!accessToken || !refreshToken){
				notification.error({
					message: "Ingreso invalido",
					description: "Al parecer hay problemas en el servidor",
					placement: "bottomRight",
				});
			}else{

			localStorage.setItem(ACCESS_TOKEN, accessToken);
			localStorage.setItem(REFRESH_TOKEN, refreshToken);

			notification.success({
				message: " Bienvenido !!",
			});
			window.location.href = "/home";

			}

		

		}
	};

	const reset = () => {
		form.resetFields();
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
					O{" "}
					<a href="http://localhost:3000/principal/signup">Registrate Ahora!</a>
				</Form.Item>
			</Form>
		</Card>
	);
};

export default SignIn;
