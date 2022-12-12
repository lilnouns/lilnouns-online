import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {DefaultSeo} from "next-seo";
import SEO from '../next-seo.config';
import {configureChains, createClient, WagmiConfig} from "wagmi";
import {publicProvider} from 'wagmi/providers/public'
import {alchemyProvider} from 'wagmi/providers/alchemy'
import {infuraProvider} from 'wagmi/providers/infura'
import {goerli, mainnet} from 'wagmi/chains'

const defaultChains = [mainnet, goerli]

const alchemyApiKey = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY as string;
const infuraApiKey = process.env.NEXT_PUBLIC_INFURA_API_KEY as string;

const {provider, webSocketProvider} = configureChains(defaultChains, [
  alchemyProvider({
    apiKey: alchemyApiKey,
    priority: 0,
  }),
  infuraProvider({
    apiKey: infuraApiKey,
    priority: 1,
  }),
  publicProvider({priority: 2}),
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
