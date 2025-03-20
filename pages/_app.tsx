import { AppProps } from "next/app";
import * as React from "react";
import "../styles/globals.css";
import "../styles/fonts.css"; 
import StarCursor from "../components/StarCursor";
import { useCallback, useEffect } from "react";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {

  const effect = useCallback(() => {
  }, []);

  useEffect(() => {
    effect();
  }, [effect]);

  
  return (
    <>
      <StarCursor />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
