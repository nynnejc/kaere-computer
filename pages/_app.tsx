import { AppProps } from "next/app";
import * as React from "react";
import "../styles/globals.css";
import "../styles/fonts.css"; 
import StarCursor from "../components/StarCursor";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <StarCursor />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
