import classNames from "classnames";
import { useState } from "react";
import TextInput from "../../components/TextInput";
import bgIMG1 from "../../assets/images/pexels.webp";

import s from "./style.module.scss";
import Image from "next/image";
import Button from "../../components/Button";
import {
  Section1,
  Section2,
  Section3,
  Section4,
} from "../../components/AboutSections.tsx";

const Registro = () => {
  const [active, setActive] = useState(0);
  return (
    <div className={s.main}>
      <div
        className={s.carousel}
        style={{ transform: `translateX(${-active * 100}vw)` }}
      >
        <Section1 setActive={setActive} />
        <Section2 setActive={setActive} />
        <Section3 setActive={setActive} />
        <Section4 setActive={setActive} />
      </div>
    </div>
  );
};

export default Registro;
