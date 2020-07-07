import React, { useState } from "react";

import "antd/dist/antd.css";
import "../../index.css";
import "./signUp.css";
import { signUpApi } from "../../api/user";
import { validityState } from "../../utils/validations";

import { Form, Input, Button, Layout, Tabs, Card, Checkbox } from "antd";

const { Header, Content, Sider } = Layout;

const layout = {
	labelCol: { span: 6 },
	wrapperCol: { span: 16 },
};

const validateMessages = {
	required: "Debes ingresar el Campo ${label}",

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
	pattern: {
		mismatch: "'${name}' se requiere Mayusculas, minusculas, numeros! min 8 caracteres!",
	},
};

const pat = {
	pattern: /^(([A-za-z]+[\s]{1}[A-za-z]+)|([A-Za-z]+))$/,
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
		secondLastname: "",
		email: "",
		password: "",
		repeatPassword: "",
	});

	const changeInputVal = (e) => {
		setInput({ ...input, [e.target.name]: e.target.value });
	};

	const onFinish = async (input) => {
		if (!input.ok) {
			console.log(input);
		}
		const result = await signUpApi(input);
		console.log(result);
	};

	const onValuesChange = (e) => {
		console.log("change input");
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
					onChange={changeInputVal}
					size={"large"}
				>
					<Form.Item
						name="name"
						label="Nombres"
						hasFeedback
						rules={[
							{
								pattern: /^(([A-za-z]+[\s]{1}[A-za-z]+)|([A-Za-z]+))$/,
								message: "Debes ingresar solo letras!",
							},
							{ required: true },
						]}
					>
						<Input value={input.name} />
					</Form.Item>
					<Form.Item
						name="lastname"
						label="Apellido Paterno"
						rules={[
							{
								pattern: /^(([A-za-z]+[\s]{1}[A-za-z]+)|([A-Za-z]+))$/,
								message: "Debes ingresar solo letras!",
							},
							{
								required: true,
							},
						]}
					>
						<Input value={input.lastname} />
					</Form.Item>
					<Form.Item
						name="secondLastname"
						label="Apellido Materno"
						rules={[
							{
								pattern: /^(([A-za-z]+[\s]{1}[A-za-z]+)|([A-Za-z]+))$/,
								message: "Debes ingresar solo letras!",
							},
							{
								required: true,
							},
						]}
					>
						<Input value={input.secondLastname} />
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
					<Form.Item
						name="password"
						label="Contraseña"
						hasFeedback
						rules={[
							{
								pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
								message:
									"minimo 8 caracteres entre mayusculas y minusculas",
							},
							{
								required: true,
							},
						]}
					>
						<Input.Password value={input.password} />
					</Form.Item>
					<Form.Item
						name="repeatPassword"
						label="repite tu Password"
						dependencies={["password"]}
						hasFeedback
						rules={[
							{
								required: true,
								message: "Please confirm your password!",
							},

							({ getFieldValue }) => ({
								validator(rule, value) {
									if (
										!value ||
										getFieldValue("password") === value
									) {
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
										: Promise.reject(
												"Debes aceptar las politicas de la comunidad"
										  ),
							},
							{ required: true },
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
						o <a href="http://localhost:3000/principal/signin">ingresa!</a>
					</Form.Item>
				</Form>
			</Card>
		</>
	);
}

export default SingUp;
