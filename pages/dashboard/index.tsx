import Image from "next/image";
import { useContext, useMemo } from "react";
import { AppContext } from "../../containers/AppProvider";
import s from "./style.module.scss";
import perfilIMG from "../../assets/images/perfil.png";
import classNames from "classnames";
import Button from "../../components/Button";
import Icon from "../../components/Icon";
import Nav from "../../components/Nav";
import { useRouter } from "next/router";

const Dashboard = () => {
  const { conectado, setConectado, count } = useContext(AppContext);
  const { push } = useRouter();
  const handleConectar = () => {
    if (conectado === "conectado") {
      push("/dashboard/comenzar");
      return;
    }
    setConectado("conectando");
    setTimeout(() => setConectado("conectado"), 3000);
  };
  const formatedCount = useMemo(() => {
    var hour = Math.floor(count / 3600);

    var minute = Math.floor((count - hour * 3600) / 60);

    var updSecond = count - (hour * 3600 + minute * 60);

    return `${hour > 9 ? hour : `0${hour}`}:${
      minute > 9 ? minute : `0${minute}`
    }:${updSecond > 9 ? updSecond : `0${updSecond}`}`;
  }, [count]);
  return (
    <div className={s.main}>
      <div className={s.container}>
        <Nav />
        <div className={s.columns}>
          <div className={classNames(s.column, s.grid)}>
            <div
              className={classNames(s.box, {
                [s.mainBox]: conectado !== "comenzado",
                [s.timer]: conectado === "comenzado",
              })}
            >
              {conectado === "comenzado" ? (
                <>
                  <h1>Llevas</h1>
                  <h1>{formatedCount}</h1>
                  <h1>conectado</h1>
                </>
              ) : (
                <>
                  {" "}
                  <h2>
                    {conectado === "conectado"
                      ? "Comenzar un nuevo día!"
                      : conectado === "conectando"
                      ? "Conectando..."
                      : "Conectar un nuevo dispositivo"}
                  </h2>
                  <div className={s.irWrapper}>
                    {conectado === "conectado" ? (
                      <Button onClick={() => handleConectar()} isIcon>
                        <Icon icon="flecha" size="lg" />
                      </Button>
                    ) : (
                      <Button
                        disabled={conectado === "conectando"}
                        onClick={() => handleConectar()}
                      >
                        {conectado === "conectando" ? "..." : "CONECTAR"}
                      </Button>
                    )}
                  </div>
                </>
              )}
            </div>
            {conectado === "comenzado" && (
              <div className={classNames(s.greenbox, s.box)}>
                <h1>Detener IEL</h1>
                <div className={s.irWrapper}>
                  <Button
                    onClick={() => setConectado("desconectado")}
                    isIcon
                    variant="outlined"
                    invertColors
                  >
                    <Icon icon="flecha" size="lg" />
                  </Button>
                </div>
              </div>
            )}
            <div className={s.box}>
              <h2>Monitoreo</h2>
              <div className={s.irWrapper}>
                <Button isIcon>
                  <Icon icon="flecha" size="lg" />
                </Button>
              </div>
            </div>
            <div className={s.box}>
              <h2> Reporte semanal</h2>
              <div className={s.irWrapper}>
                <Button isIcon>
                  <Icon icon="flecha" size="lg" />
                </Button>
              </div>
            </div>
          </div>
          <div className={classNames(s.column, s.aside)}>
            <div className={s.horizontalBox}>
              <h2>Noticias</h2>
              <Button variant="text">
                <Icon icon="flecha" size="lg" />
              </Button>
            </div>
            <div className={s.horizontalBox}>
              <h2>Recomendaciones</h2>
              <Button variant="text">
                <Icon icon="flecha" size="lg" />
              </Button>
            </div>
            <div className={s.horizontalBox}>
              <h2>Foro</h2>
              <Button variant="text">
                <Icon icon="flecha" size="lg" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
