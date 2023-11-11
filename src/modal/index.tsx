import styles from "./modal.module.css";
import Carro from "../assets/icons/carro.svg";
import { useState, useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
}

export function Modal({ isOpen }: ModalProps) {
  const [openModal, setOpenModal] = useState(isOpen);

  useEffect(() => {
    setOpenModal(isOpen);
  }, [isOpen]);

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div className={openModal ? styles.modal : styles.hidden}>
      {openModal && (
        <>
          <button className={styles.botttonClose} onClick={handleCloseModal}>
            Minimizar
          </button>

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
              <p>
                Aceito a <span>Política de Privacidade.</span>
              </p>
            </div>
            <button className={styles.buttonEnviar}>Enviar</button>
          </div>
        </>
      )}
    </div>
  );
}
