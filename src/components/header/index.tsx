import LogoBmw from "../../assets/logo/logo-bmw-rio.svg";
import Telefone from "../../assets/icons/telefone.svg";
import styles from "./header.module.css";
import { Modal } from "../../modal";
import { useState } from "react";

export function Header() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <header className={styles.header}>
      <Modal isOpen={openModal}>
        <p>teste teste</p>
      </Modal>
      <section className={styles.headerContent}>
        <div className={styles.headerContato}>
          <img src={Telefone} />
          <p>(21) 2042-4442</p>
        </div>
        <img src={LogoBmw} alt="logo da bmw" />
      </section>
      <button
        className={styles.buttonContacao}
        onClick={() => setOpenModal(true)}
      >
        Solicite uma cotação
      </button>
    </header>
  );
}
