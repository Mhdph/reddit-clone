import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../chakra/theme";
import Layout from "../components/Layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <RecoilRoot>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
    </ChakraProvider>
  );
}
export default MyApp;
