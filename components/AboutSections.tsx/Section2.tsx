import Image from "next/image";
import classNames from "classnames";
import Button from "../Button";
import TextInput from "../TextInput";
import s from "./style.module.scss";
import bgIMG from "../../assets/images/pexels.webp";
import Dropdown from "../Dropdown";
import PillsCheckbox, { PillOption } from "../PillsCheckbox";
import { useState } from "react";

const pronombres = [
  { value: "El", label: "El" },
  { value: "Ella", label: "Ella" },
  { value: "Elle/x", label: "Elle/x" },
  { value: "Otro", label: "Otro" },
];

const Section2: React.FC<{
  setActive: React.Dispatch<React.SetStateAction<number>>;
}> = ({ setActive }) => {
  const [active, setActivePill] = useState<string>();
  return (
    <div className={classNames(s.section, s.columns)}>
      <div className={s.container}>
        <div className={s.content}>
          <h1>PERFIL</h1>
          <div className={s.inputsBox}>
            <PillsCheckbox
              active={active}
              options={pronombres}
              setActive={setActivePill}
              label="Pronombres: "
            />
            <TextInput label="Nombre:" />
            <TextInput type="number" label="Edad: " />
            <Dropdown
              label="Ubicación"
              placeholder="Seleccionar..."
              options={[
                { value: "iqq", label: "Iquique" },
                { value: "stgo", label: "Santiago" },
                { value: "iqq", label: "Valparaiso" },
              ]}
            />
          </div>
          <div>
            <Button
              customClass={s.nextButton}
              variant="outlined"
              size="LG"
              onClick={() => setActive(2)}
            >
              CONTINUAR
            </Button>
          </div>
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
export default Section2;
