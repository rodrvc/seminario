import React from "react";
import SignUp from "../../components/SingUp";
import {Button, Radio} from "antd";
import {DownloadOutlined, SearchOutlined} from "@ant-design/icons";
import "./singuppage.css";
import logo from "../../assets/cooking.svg";
import iconDoggi from "../../assets/aseo-de-mascotas.svg";

function SignupPage() {
    return (
        <div className="register">
            <div className="front">
                <div>
                    <h1 className="langing-title">¿Buscando un Servicio?</h1>
                </div>
                <div className="landing-msj-container">
                    <p className="langing-msj">&#x21A7; Registrate Aqui &#x21A7;
                    </p>
                </div>
            </div>
            <div className="register-form">
                <SignUp/>
            </div>
            <div className="btn-explore">
				<Button
					className="landing-btn"
					type="primary"
					icon={<SearchOutlined spin={false} style={{ fontSize: "24px" }} />}
					size={"large"}
				>
					Explorar
				</Button>
			</div>
			<div className="icon">
				<img className="icon-item" src={logo} alt="logo" />
				<img className="icon-item doggi" src={iconDoggi} alt="logo" />
			</div>
		</div>
    );
}

export default SignupPage;
