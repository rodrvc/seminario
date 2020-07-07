import React from "react";
import SignIn from "../../components/SignIn";
import { Redirect } from "react-router-dom";
import { Button, Radio } from "antd";
import { DownloadOutlined, SearchOutlined } from "@ant-design/icons";
import "./landing.css";
import logo from "../../assets/cooking.svg";
import { getAccess } from "../../api/auth";

export function Login() {
	if (getAccess()) {
		return <Redirect to="/home" />;
	}

	return (
		<>
			<div className="mainfront">
				<div className="front">
					<div>
						<h1 className="langing-title">¿Buscando un Servicio?</h1>
					</div>
					<div className="landing-msj-container">
						<p className="langing-msj">Todos tenemos algo que ofrecer...</p>
					</div>
					<Button
						className="landing-btn"
						type="primary"
						icon={
							<SearchOutlined
								spin={false}
								style={{ fontSize: "24px" }}
							/>
						}
						size={"large"}
					>
						EXPLORAR
					</Button>
				</div>
				<div className="landing-form">
					<SignIn />
				</div>
			</div>
			<div className="icon">
				<img src={logo} alt="logo" />
			</div>
		</>
	);
}
export default Login;
