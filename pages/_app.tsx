import { AppProps } from "next/app";
import * as React from "react";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
      <Component {...pageProps} />
   
  );
};

export default MyApp;
