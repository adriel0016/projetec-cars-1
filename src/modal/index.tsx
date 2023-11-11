import styles from "./modal.module.css";
import Carro from "../assets/icons/carro.svg";

interface ModalProps {
  isOpen: boolean;
}

export function Modal({ isOpen }: ModalProps) {
  if (isOpen) {
    return (
      <div className={styles.modal}>
        <button className={styles.botttonClose}>Minimizar</button>
        <div className={styles.solicitar}>
          <img src={Carro} alt="foto de carro" />
          <h1>Solicitar cotação</h1>
        </div>
        <div className={styles.containerForm}>
          <form className={styles.form}>
            <input placeholder="Nome" />
            <input placeholder="E-mail" />
            <input placeholder="Telefone" />
            <input placeholder="Modelo" />
            <input placeholder="Mensagem" />
          </form>

          <div className={styles.checkBox}>
            <input type="checkbox" />
            <p>Aceito a Política de Privacidade.</p>
          </div>
          <button>Eviar</button>
        </div>
      </div>
    );
  }
  return null;
}
