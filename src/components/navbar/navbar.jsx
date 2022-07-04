import React from "react";
import "./navbar.css";
import logo from "./assets/images/logo.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logoENome">
        <img src={logo} style={{ width: "25%", height: "100%" }} />
        <div style={{ fontSize: "250%", color: "white" }}>Dashboard</div>
      </div>
      <div className="switchModo">
        Clinico
        <div
          style={{
            borderLeft: "2px solid",
            height: "20px",
            marginLeft: "12px",
            marginRight: "12px",
          }}
        />
        <div style={{ fontWeight: "bold" }}>Administrativo</div>
      </div>
      <div className="login">
        <div
          style={{ display: "flex", width: "100%", justifyContent: "center" }}
        >
          Bem Vindo, <div style={{ fontWeight: "bold" }}>Shamyr Castro!</div>
        </div>
        <div>Logout</div>
      </div>
    </div>
  );
}

export default Navbar;
