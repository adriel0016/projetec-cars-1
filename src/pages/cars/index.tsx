import styles from "./cars.module.css";
import Facebook from "../../assets/icons/facebook.svg";
import Whatsapp from "../../assets/icons/whatsapp.svg";
import { listCars } from "../../config/listaCars";

function Cars() {
  const carros = listCars.map((car) => (
    <div key={car.id} className={styles.container}>
      <div className={styles.images}>
        <img src={car.img} alt={`foto da ${car.name}`} />
      </div>
      <p>{car.name}</p>
      <div className={styles.buttons}>
        <button className={styles.buttonLeft}>Cotação</button>
        <button className={styles.buttonRight}>Ligar</button>
      </div>
      <span className={styles.compartilhar}>
        Compartilhe:
        <img src={Facebook} alt="logo do facebook" />
        <img src={Whatsapp} alt="logo do whatsapp" />
      </span>
    </div>
  ));

  return (
    <div className={styles.paragrafo}>
      <h2>ESCOLHA SEU BMW</h2>
      <div>{carros}</div>
    </div>
  );
}

export default Cars;
