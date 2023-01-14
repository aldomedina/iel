import Image from "next/image";
import classNames from "classnames";
import { useState } from "react";
import TextInput from "../TextInput";
import Button from "../Button";
import bgIMG from "../../assets/images/pexels.webp";

import s from "./style.module.scss";
const Section1: React.FC<{
  setActive: React.Dispatch<React.SetStateAction<number>>;
}> = ({ setActive }) => {
  const [terms, setTerms] = useState(false);

  return (
    <div className={classNames(s.section, s.columns)}>
      <div className={s.container}>
        <div className={s.content}>
          <h1>REGISTRAME</h1>
          <div className={s.inputsBox}>
            <TextInput label="ID:" />
            <TextInput label="Correo Electrónico:" />
            <TextInput label="Contraseña:" type="password" />
            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              <label htmlFor="terms">Acepto terminos y servicios</label>
              <input
                id="terms"
                type="checkbox"
                checked={terms}
                onChange={(e) => setTerms(!terms)}
              />
            </div>
          </div>
          <Button
            customClass={s.nextButton}
            variant="outlined"
            size="LG"
            onClick={() => setActive(1)}
          >
            CONTINUAR
          </Button>
        </div>
      </div>
      <div className={s.container}>
        <Image
          src={bgIMG}
          alt="pexels background image"
          fill
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default Section1;
