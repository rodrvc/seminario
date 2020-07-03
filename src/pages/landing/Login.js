import React from "react";
import SingUp from "../../components/SingUp";
import { Button, Radio } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

export function Login() {
  return (
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
          icon={<DownloadOutlined />}
          size={"large"}
        >
          EXPLORAR
        </Button>
      </div>
      <div className="front landing-form">
        <SingUp />
      </div>
    </div>
  );
}
export default Login;
