import '@/styles/tailwind.css'
import ConnectWallet from '@/components/ConnectWallet'

import { IDWrapper } from '@/context/IDContext'

export default function App({ Component, pageProps }) {
  return (
    <>
      <ConnectWallet>
        <IDWrapper>
          <Component {...pageProps} />
        </IDWrapper>
      </ConnectWallet>
    </>
  )
}
