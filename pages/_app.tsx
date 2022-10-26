import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {DefaultSeo} from "next-seo";
import SEO from '../next-seo.config';
import {configureChains, createClient, defaultChains, WagmiConfig} from "wagmi";
import {publicProvider} from 'wagmi/providers/public'
import { alchemyProvider } from 'wagmi/providers/alchemy'

const {provider, webSocketProvider} = configureChains(defaultChains, [
  alchemyProvider({
    apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
    priority: 0,
  }),
  publicProvider({ priority: 1 }),
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
