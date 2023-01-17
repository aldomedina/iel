import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

import bgIMG from "../assets/images/leaf.webp";
import Button from "../components/Button";
import Icon from "../components/Icon";
import s from "../styles/Home.module.scss";

export default function Home() {
  const { push } = useRouter();
  return (
    <>
      <Head>
        <title>IEL</title>
        <meta name="description" content="dispositivo para el monitoreo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={s.main}>
        <div className={s.container}>
          <Image
            src={bgIMG}
            alt="leaf background image"
            fill
            objectFit="cover"
          />
          <div className={s.logo}>
            <Icon size="logo" icon="logo" />
          </div>
        </div>
        <div className={s.container}>
          <Button
            variant="outlined"
            size="LG"
            onClick={() => push("/registro")}
          >
            REGISTRAME
          </Button>
          <Button
            variant="outlined"
            size="LG"
            onClick={() => push("/dashboard")}
          >
            INICIAR SESIÓN
          </Button>
        </div>

        <footer className={s.footer}>
          <div className={s.lines}>
            <span className={s.line} />
            <span className={s.dot} />
            <span className={s.line} />
          </div>
          <Button variant="text">Registrame Después</Button>
        </footer>
      </div>
    </>
  );
}
