import { AppProps } from "next/app";
import * as React from "react";
import Head from "next/head";
import "../styles/globals.css";
import StarCursor from "../components/StarCursor";
import { useCallback, useEffect } from "react";

const MyApp = ({ Component, pageProps }: AppProps): React.ReactElement => {

  const effect = useCallback(() => {
  }, []);

  useEffect(() => {
    effect();
  }, [effect]);

  
  return (
    <>
      <Head>
        <link rel="alternate" type="application/rss+xml" title="Kære Computer" href="/rss.xml" />
      </Head>
      <StarCursor />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
