import Image from "next/image";
import { useContext } from "react";
import { AppContext } from "../../containers/AppProvider";
import Icon from "../Icon";
import perfilIMG from "../../assets/images/perfil.png";

import s from "./style.module.scss";
const Nav = () => {
  const { nombre, ciudad } = useContext(AppContext);
  return (
    <div className={s.top}>
      <div className={s.bienvenido}>
        <div>
          <h1 className={s.hola}>Hola!</h1>
          <h2>{nombre ?? "nombre"}</h2>
        </div>

        <div className={s.clima}>
          <div>
            <span className={s.tiempo}>25º</span>
            <br />
            <span>{ciudad ?? "ciudad"}</span>
          </div>
          <span>
            <Icon icon="temperatura" size="xl" />
          </span>
        </div>
      </div>
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
  );
};

export default Nav;
