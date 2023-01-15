import Image from "next/image";
import { useContext } from "react";
import { AppContext } from "../../containers/AppProvider";
import s from "./style.module.scss";
import perfilIMG from "../../assets/images/perfil.png";
import classNames from "classnames";
import Button from "../../components/Button";
const Dashboard = () => {
  const { nombre, ciudad, conectado, setConectado } = useContext(AppContext);
  const handleConectar = () => {
    setConectado("conectando");
    setTimeout(() => setConectado("conectado"), 3000);
  };
  return (
    <div className={s.main}>
      <div className={s.container}>
        <div className={s.top}>
          <div className={s.bienvenido}>
            <div>
              <h1 className={s.hola}>Hola!</h1>
              <h2>{nombre}</h2>
            </div>

            <div className={s.clima}>
              <div>
                <span className={s.tiempo}>25º</span>
                <br />
                <span>{ciudad}</span>
              </div>
              <span></span>
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
        <div className={s.columns}>
          <div className={classNames(s.column, s.grid)}>
            <div className={classNames(s.box, s.mainBox)}>
              <h2>
                {conectado === "conectado"
                  ? "Comenzar un nuevo día!"
                  : conectado === "conectando"
                  ? "Conectando..."
                  : "Conectar un nuevo dispositivo"}
              </h2>
              <div className={s.irWrapper}>
                {conectado === "conectado" ? (
                  <Button>ir</Button>
                ) : (
                  <Button
                    disabled={conectado === "conectando"}
                    onClick={() => handleConectar()}
                  >
                    {conectado === "conectando" ? "..." : "ir"}
                  </Button>
                )}
              </div>
            </div>
            <div className={s.box}>
              <h2>Monitoreo</h2>
              <div className={s.irWrapper}>
                <Button>ir</Button>
              </div>
            </div>
            <div className={s.box}>
              <h2> Reporte semanal</h2>
              <div className={s.irWrapper}>
                <Button>ir</Button>
              </div>
            </div>
          </div>
          <div className={classNames(s.column, s.aside)}>
            <div className={s.horizontalBox}>
              <h2>Noticias</h2> <Button>ir</Button>
            </div>
            <div className={s.horizontalBox}>
              <h2>Recomendaciones</h2> <Button>ir</Button>
            </div>
            <div className={s.horizontalBox}>
              <h2>Foro</h2> <Button>ir</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
