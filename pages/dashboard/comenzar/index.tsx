import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import Button from "../../../components/Button";
import Icon from "../../../components/Icon";
import Columns, { Box } from "../../../components/Layout/Columns";
import Nav from "../../../components/Nav";
import PillsCheckbox from "../../../components/PillsCheckbox";
import PillsRadioInput from "../../../components/PillsRadioInput";
import s from "./style.module.scss";

const rutina = [
  { value: "en casa", label: "En casa" },
  { value: "Estudio", label: "Estudio" },
  { value: "Salida", label: "Salida" },
  { value: "Ocio", label: "Ocio" },
  { value: "Trabajo", label: "Trabajo" },
  { value: "Compras", label: "Compras" },
];

const sino = [
  { value: "Si", label: "Si" },
  { value: "No", label: "No" },
];

const Comenzar = () => {
  const [actives, setActives] = useState<string[]>();
  const { push } = useRouter();
  const col1 = (
    <>
      <Box
        top={<h1>¿Cómo te sientes hoy?</h1>}
        content={
          <div className={s.emociones}>
            <div>
              <div>
                <Image
                  src="/images/bien.png"
                  width={100}
                  height={66}
                  alt="bien"
                />
              </div>
              <span>Bien</span>
            </div>
            <div>
              <div>
                <Image
                  src="/images/superbien.png"
                  width={100}
                  height={66}
                  alt="superbien"
                />
              </div>
              <span>Super bien</span>
            </div>
            <div>
              <div>
                <Image
                  src="/images/calor.png"
                  width={100}
                  height={66}
                  alt="calor"
                />
              </div>
              <span>Con calor</span>
            </div>
            <div>
              <div>
                <Image
                  src="/images/molestx.png"
                  width={100}
                  height={66}
                  alt="molestx"
                />
              </div>
              <span>Molestx</span>
            </div>
            <div>
              <div>
                <Image
                  src="/images/cansadx.png"
                  width={100}
                  height={66}
                  alt="estres"
                />
              </div>
              <span>Estres</span>
            </div>
            <div>
              <div>
                <Image
                  src="/images/energia.png"
                  width={100}
                  height={66}
                  alt="triste"
                />
              </div>
              <span>Triste</span>
            </div>
            <div>
              <div>
                <Image
                  src="/images/triste.png"
                  width={100}
                  height={90}
                  alt="energia"
                />
              </div>
              <span>Con energía</span>
            </div>
            <div>
              <div>
                <Image
                  src="/images/estres.png"
                  width={100}
                  height={90}
                  alt="estres"
                />
              </div>
              <span>Cansadx</span>
            </div>
          </div>
        }
      />
      <Box
        top={
          <>
            <h2>Rutina de hoy</h2>
            <Button
              variant="contained"
              isIcon
              onClick={() => push("/dashboard/rutina")}
            >
              <Icon icon="flecha" size="lg" />
            </Button>
          </>
        }
        content={
          <PillsRadioInput
            options={rutina}
            noLabel
            actives={actives}
            setActives={setActives}
            wrap
          />
        }
      />
    </>
  );
  const col2 = (
    <Box
      top={<h2>Utilizarás el binder con dipositivo</h2>}
      content={
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Button variant="outlined"> Si</Button>
          <Button variant="outlined" onClick={() => push("/otros/boxes")}>
            No
          </Button>
        </div>
      }
    />
  );
  return <Columns col1={col1} col2={col2} />;
};

export default Comenzar;
