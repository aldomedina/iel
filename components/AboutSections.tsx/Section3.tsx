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

const hasBinder = [
  { value: "Si", label: "Si" },
  { value: "No", label: "No" },
];

const Section3: React.FC<{
  setActive: React.Dispatch<React.SetStateAction<number>>;
}> = ({ setActive }) => {
  const { push } = useRouter();
  const [binder, setBinder] = useState<string>();
  const [dispositivo, setDispositivo] = useState<string>();
  return (
    <div className={classNames(s.section, s.columns)}>
      <div className={s.container}>
        <div className={s.content}>
          <div className={s.inputsBox}>
            <PillsCheckbox
              options={hasBinder}
              active={binder}
              setActive={setBinder}
              label="Tienes Binder: "
            />
            <PillsCheckbox
              options={hasBinder}
              active={dispositivo}
              setActive={setDispositivo}
              label="Tienes el dispositivo Ie: "
            />
          </div>
          <div className={s.btns}>
            <Button
              customClass={s.nextButton}
              variant="outlined"
              size="LG"
              onClick={() => setActive(1)}
            >
              VOLVER
            </Button>
            <Button
              customClass={s.nextButton}
              variant="outlined"
              size="LG"
              disabled={!binder || !dispositivo}
              onClick={() =>
                binder === "Si" && dispositivo === "Si"
                  ? setActive(3)
                  : push("otros")
              }
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
export default Section3;
