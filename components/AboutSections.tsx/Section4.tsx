import Image from "next/image";
import classNames from "classnames";
import Button from "../Button";
import TextInput from "../TextInput";
import s from "./style.module.scss";
import bgIMG from "../../assets/images/pexels.webp";
import Dropdown from "../Dropdown";
import PillsCheckbox, { PillOption } from "../PillsCheckbox";
import { useState } from "react";
import { useRouter } from "next/router";
import PillsRadioInput from "../PillsRadioInput";

const cuantos = [
  { value: "1", label: "1" },
  { value: "mas", label: "Más de 1" },
];
const tiempo = [
  { value: "a", label: "Entre 1 y 3" },
  { value: "b", label: "Entre 3 y 6" },
];
const dias = [
  { value: "L", label: "L" },
  { value: "M", label: "M" },
  { value: "Mi", label: "M" },
  { value: "J", label: "J" },
  { value: "V", label: "V" },
  { value: "S", label: "S" },
  { value: "D", label: "D" },
];

const Section4: React.FC<{
  setActive: React.Dispatch<React.SetStateAction<number>>;
}> = ({ setActive }) => {
  const { push } = useRouter();
  const [cantidad, setCantidad] = useState<string>();
  const [frecuencia, setFrecuencia] = useState<string>();
  const [semanal, setSemanal] = useState<string[]>();
  return (
    <div className={classNames(s.section, s.columns)}>
      <div className={s.container}>
        <div className={s.content}>
          <div className={s.inputsBox}>
            <PillsCheckbox
              options={cuantos}
              active={cantidad}
              setActive={setCantidad}
              label="Cuántas binder tienes "
            />
            <PillsCheckbox
              options={tiempo}
              active={frecuencia}
              setActive={setFrecuencia}
              label="Cuántas horas al día utilizas el binder"
            />
            <PillsRadioInput
              options={dias}
              setActives={setSemanal}
              actives={semanal}
              label="Cuántos días utilizas el binder"
            />
          </div>
          <div>
            <Button
              customClass={s.nextButton}
              variant="contained"
              size="LG"
              disabled={!frecuencia || !cantidad || !semanal}
              onClick={() => push("dashboard")}
            >
              COMENZAR
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
export default Section4;
