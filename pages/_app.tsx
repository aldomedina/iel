import "../styles/globals.css";
import type { AppProps } from "next/app";
import classNames from "classnames";
import localFont from "@next/font/local";
import AppProvider from "../containers/AppProvider";

// Font files can be colocated inside of `pages`
const neonFont = localFont({ src: "./neon.woff" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <div className={classNames("mainWrapper", neonFont.className)}>
        <Component {...pageProps} />
      </div>
    </AppProvider>
  );
}
