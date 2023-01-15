import Image from "next/image";
import classNames from "classnames";
import Button from "../Button";
import TextInput from "../TextInput";
import s from "./style.module.scss";
import bgIMG from "../../assets/images/pexels.webp";
import Dropdown from "../Dropdown";
import PillsCheckbox, { PillOption } from "../PillsCheckbox";
import { useContext, useState } from "react";
import perfilIMG from "../../assets/images/perfil.png";
import { AppContext } from "../../containers/AppProvider";
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
  const { setNombre, nombre, ciudad, setCiudad } = useContext(AppContext);
  return (
    <div className={classNames(s.section, s.columns)}>
      <div className={s.container}>
        <div className={s.content}>
          <div>
            <div className={s.top}>
              <h1>PERFIL</h1>
              <div className={s.foto}>
                <Image
                  src={perfilIMG}
                  alt="perfil"
                  fill
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <div className={s.inputsBox}>
              <PillsCheckbox
                active={active}
                options={pronombres}
                setActive={setActivePill}
                label="Pronombres: "
              />
              <TextInput
                label={"Nombre:"}
                onChange={(e) => setNombre(e.target.value)}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "2rem",
                }}
              >
                <div style={{ maxWidth: "200px" }}>
                  <TextInput type="number" label="Edad: " />
                </div>
                <div style={{ flex: 1 }}>
                  <Dropdown
                    label="Ubicación"
                    placeholder="Seleccionar..."
                    options={[
                      { value: "iqq", label: "Iquique" },
                      { value: "stgo", label: "Santiago" },
                      { value: "iqq", label: "Valparaiso" },
                    ]}
                    //@ts-ignore
                    onChange={(e) => setCiudad(e.label)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={s.btns}>
            <Button
              customClass={s.nextButton}
              variant="outlined"
              size="LG"
              onClick={() => setActive(0)}
            >
              VOLVER
            </Button>
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
