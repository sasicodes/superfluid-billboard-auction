import '../../styles/globals.css'

import { providers } from 'ethers'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Toaster } from 'react-hot-toast'
import { MoralisProvider } from 'react-moralis'
import { chain, Connector, Provider } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'

const polygonMumbaiRpc = process.env.MUMBAI_RPC_URL as string

// Set up connectors
const connectors = () => {
  return [new InjectedConnector({ chains: [chain.polygonTestnetMumbai] })]
}

// Set up providers
type ProviderConfig = { chainId?: number; connector?: Connector }
const provider = ({ chainId }: ProviderConfig) =>
  new providers.JsonRpcProvider(polygonMumbaiRpc, chainId)

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL as string
const appId = process.env.NEXT_PUBLIC_APP_ID as string

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider serverUrl={serverUrl} appId={appId} initializeOnMount>
      <Provider
        autoConnect
        connectorStorageKey="liverse.wallet"
        connectors={connectors}
        provider={provider}
      >
        <Head>
          <title>Liverse</title>
          <link rel="shortcut icon" href="/logo.png" />
        </Head>
        <Toaster position="top-right" />
        <Component {...pageProps} />
      </Provider>
    </MoralisProvider>
  )
}

export default MyApp
