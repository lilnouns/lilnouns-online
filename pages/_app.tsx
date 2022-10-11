import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {DefaultSeo} from "next-seo";
import SEO from '../next-seo.config';
import {configureChains, createClient, defaultChains, WagmiConfig} from "wagmi";
import {publicProvider} from 'wagmi/providers/public'

const {provider, webSocketProvider} = configureChains(defaultChains, [
  publicProvider(),
])

const client = createClient({
  provider,
  webSocketProvider,
})

function MyApp({Component, pageProps}: AppProps) {
  return (
    <WagmiConfig client={client}>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </WagmiConfig>
  );
}

export default MyApp
