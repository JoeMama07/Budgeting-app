import { MantineProvider } from "@mantine/core";
import type { AppProps } from "next/app";
import Head from "next/head";
import { WishlistProvider } from "react-use-wishlist";
import { BudgetProvider } from "../context/budgetContext";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>BudgetBear</title>
        <link rel="shortcut icon" href="/BudgetBear.png" />
      </Head>
      <BudgetProvider>
        <MantineProvider withGlobalStyles withNormalizeCSS>
          <WishlistProvider>
            <Component {...pageProps} />
          </WishlistProvider>
        </MantineProvider>
      </BudgetProvider>
    </>
  );
}
