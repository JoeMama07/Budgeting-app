import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import type { AppProps } from "next/app";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";
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
          <NextNProgress
            color="#FFF9BA"
            options={{ easing: "ease", speed: 500 }}
          />
          <NotificationsProvider>
            <WishlistProvider>
              <Component {...pageProps} />
            </WishlistProvider>
          </NotificationsProvider>
        </MantineProvider>
      </BudgetProvider>
    </>
  );
}
