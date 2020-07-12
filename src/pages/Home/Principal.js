import React from "react";

import { Button } from "antd";
import React, { userState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import logo from "../../assets/cooking.svg";
import iconDoggi from "../../assets/aseo-de-mascotas.svg";
import useAuth from "../../hooks/useAuth";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import "./home.css";
import { getAccess } from "../../api/auth";
import User from "../../../../server/models/User";
import { getTaskersRequired } from "../../api/user";

function Home() {
	const { user, isLoading } = useAuth();
	const u = user;

	const [requiredTasker, setRequiredTasker] = useState({});

	if (!user) {
		return <Redirect to="/principal/signin" />;
	}

	return (
		<>
			<div className="register">
				<div className="front">
					<div>
						<h1 className="title">Bienvenido {}</h1>
					</div>
				</div>
				<div className="register-form"></div>
				<div className="btn-explore">
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
				<div className="icon">
					<img className="icon-item" src={logo} alt="logo" />
					<img className="icon-item doggi" src={iconDoggi} alt="logo" />
				</div>
			</div>
		</>
	);
}

export default Home;
