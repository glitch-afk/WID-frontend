import '@rainbow-me/rainbowkit/styles.css'
import {
  getDefaultWallets,
  RainbowKitProvider,
  lightTheme,
  darkTheme,
} from '@rainbow-me/rainbowkit'
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'

const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
  [
    alchemyProvider({ apiKey: '_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC' }), // use environment variables
    publicProvider(),
  ]
)

const { connectors } = getDefaultWallets({
  appName: 'Wagpay ID',
  chains,
})

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
})

export default function ConnectWallet({ children }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        coolMode
        appInfo={{
          appName: 'Wagpay ID',
        }}
        chains={chains}
        theme={{ lightMode: lightTheme(), darkMode: darkTheme() }}
      >
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
