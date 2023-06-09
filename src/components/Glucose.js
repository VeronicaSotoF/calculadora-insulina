import React, { useState } from "react";
import appLogo from "../resources/app-logo2.png";
import Settings from "./Settings";

const Glucose = ({ user }) => {
  return (
    <div className={`glucose-input-container disabled`}>
      <div className={`flex-column glucose-input-group `}>
        <div className="field">
          <label>Ingrese su nivel de glucosa actual</label>
          <input placeholder="100"></input>
        </div>
        <div className="field">
          <img className="app-logo" src={appLogo} />
        </div>
        <div className="field">
          <label>Ingrese su RIC</label>
          <input placeholder={user.RIC}></input>
        </div>
        <div className="field">
          <label>Ingrese su sensibilidad</label>
          <input placeholder={user.sensibilidad}></input>
        </div>
      </div>
    </div>
  );
};

export default Glucose;
