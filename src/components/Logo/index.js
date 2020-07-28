import React from "react";
import LogoPNG from "../../assets/img/Logo.png";

function Logo() {
  return (
    <a href="/">
      <img className="Logo" src={LogoPNG} alt="MarrecaFlix logo" />
    </a>
  );
}

export default Logo;
