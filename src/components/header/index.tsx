import LogoBmw from "../../assets/logo/logo-bmw-rio.svg";
import Telefone from "../../assets/icons/telefone.svg";
import styles from "./header.module.css";
import { Modal } from "../../modal";
import { useState } from "react";

export function Header() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  return (
    <header className={styles.header}>
      <section className={styles.headerContent}>
        <div className={styles.headerContato}>
          <img src={Telefone} alt="Ícone de telefone" />
          <p>(21) 2042-4442</p>
        </div>
        <img src={LogoBmw} alt="Logo da BMW" />
      </section>
      <button className={styles.buttonContacao} onClick={handleOpenModal}>
        Solicite uma cotação
      </button>

      <Modal isOpen={modalOpen} />
    </header>
  );
}
