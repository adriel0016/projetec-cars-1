import { FC } from "react";
import "./Cars.scss";
import { listCars } from "../../../config/listaCars";
import Facebook from "../../../assets/icons/facebook.svg";
import Whatsapp from "../../../assets/icons/whatsapp.svg";
import WhatsappButton from "../../../assets/icons/whatsapp-icon-seeklogo.com.svg";

interface CarsProps {
  handleOpenModal: () => void;
}

const Cars: FC<CarsProps> = ({ handleOpenModal }) => {
  const renderList = listCars.map((car) => (
    <div key={car.id} className="itens-cars">
      <div className="images">
        <img src={car.img} alt={`foto da ${car.name}`} />
      </div>
      <p>{car.name}</p>
      <div className="buttons">
        <button className="buttonLeft" onClick={handleOpenModal}>
          Cotação
        </button>
        <button className="buttonRight">Ligar</button>
      </div>
      <span className="compartilhar">
        Compartilhe:
        <img src={Facebook} alt="logo do facebook" />
        <img src={Whatsapp} alt="logo do whatsapp" />
      </span>
    </div>
  ));

  return (
    <div className="Cars" data-testid="Cars">
      <img
        className="logo-whatsapp"
        src={WhatsappButton}
        alt="foto whatsapp botao"
      />
      <h2>ESCOLHA SEU BMW</h2>
      <div className="wrapper">{renderList}</div>
    </div>
  );
};

export default Cars;
