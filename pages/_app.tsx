"use client";

import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { Manrope } from "next/font/google";
import createEmotionCache from "@/utils/createEmotionCache";
import theme from "@/utils/theme";
import "@/styles/globals.css";


const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: MyAppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      {/* Add font CSS variable to html/body */}
      <div className={manrope.variable}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <style jsx global>{`
            html {
              font-family: var(--font-manrope), sans-serif;
            }
            body {
              overflow-x: hidden;
            }
          `}</style>
          <Component {...pageProps} />
        </ThemeProvider>
      </div>
    </CacheProvider>
  );
}
