import styles from "./modal.module.css";
import Carro from "../../assets/icons/carro.svg";
import React, { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { listCars } from "../../config/listaCars";

interface ModalProps {
  isOpen: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Modal({ isOpen, onClose }: ModalProps) {
  const [car, setCar] = useState<number|null>(null);

  const handleCloseModal = () => {
    onClose(!isOpen);
  };

  return (
    <div className={isOpen ? styles.modal : styles.hidden}>
      {isOpen && (
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
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">Carros</InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={car}
                  onChange={(event: any) => setCar(event.target.value)}
                  label="Age"
                  color="primary"
                >
                  {listCars?.map((car: any, key: number) => (
                    <MenuItem value={car?.id} key={key}>{car?.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>

              <TextField id="standard-basic" label="Nome" variant="standard" />
              <TextField id="standard-basic" label="E-mail" variant="standard" />
              <TextField id="standard-basic" label="Telefone" variant="standard" />
              <TextField id="standard-basic" label="Modelo" variant="standard" />
              <TextField id="standard-basic" label="Mensagem" variant="standard" />
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
