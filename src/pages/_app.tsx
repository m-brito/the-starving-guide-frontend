import type { AppProps } from "next/app";

import { GlobalStyle } from "@globals/index";
import { ThemeProvider } from "@contexts/ThemeContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
