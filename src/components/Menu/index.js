import React from "react";
import "./Menu.css";
import Button from "../Button";
import Logo from "../Logo";

function Menu() {
  return (
    <nav className="Menu">
      <Logo />

      <Button as="a" className="ButtonLink" href="/">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;
