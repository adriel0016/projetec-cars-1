import React, { FC } from "react";
import "./HeaderDesktop.scss";
import Logo360 from "../../../assets/icons/360.svg";
import LogoWhatsapp from "../../../assets/icons/Icon-whatsapp.svg";
import LogoBmw from "../../../assets/logo/logo-bmw-rio.svg";
import LogoTelefone from "../../../assets/icons/telefone.svg";

interface HeaderDesktopProps {}

const HeaderDesktop: FC<HeaderDesktopProps> = () => (
  <div className="HeaderDesktop" data-testid="HeaderDesktop">
    <div className="itens-header">
      {" "}
      <div className="container-button">
        <button>
          <img src={LogoTelefone} alt="logo 360 graus" />
          (21) 2042-4442
        </button>
        <button>
          <img src={Logo360} alt="logo 360 graus" />
          TOUR VIRTUAL
        </button>
        <button className="button-whatsapp">
          <img src={LogoWhatsapp} alt="logo 360 graus" />
          WHATSAPP
        </button>
      </div>
      <div className="itens-modal">
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
      </div>
    </div>
    <img src={LogoBmw} alt="logo bmw" />
  </div>
);

export default HeaderDesktop;
