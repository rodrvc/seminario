import React from "react";

import { Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import logo from "../../assets/cooking.svg";
import iconDoggi from "../../assets/aseo-de-mascotas.svg";
import useAuth from "../../hooks/useAuth";

function Home() {
	const { user, isLoading } = useAuth();
	const u = user;
	console.log(u);

	return (
		<>
			<div className="register">
				<div className="front">
					<div>
						<h1 className="langing-title">Bienvenido {}</h1>
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
