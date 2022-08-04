import { useAccount } from 'wagmi'
import { useIDContext } from '@/context/IDContext'
import Layout from '@/components/Layout'

const ClaimID = () => {
  const { wagpayID } = useIDContext()
  const { address } = useAccount()
  return (
    <Layout>
      <div className="flex h-fit w-full items-center justify-center text-center dark:text-white">
        <div className="mt-4 flex flex-col items-center space-y-6 rounded-lg bg-gray-500/20 bg-opacity-30 px-4 py-12 dark:bg-[#4F4F4F33] lg:mt-24 lg:w-2/5 lg:px-20">
          <div className="text-4xl font-bold lg:text-6xl">CLAIM YOUR ID</div>
          <div className="text-2xl font-semibold text-wid-purple lg:text-3xl">
            {wagpayID ? wagpayID : <span>satyam@wagpay</span>}
          </div>
          <span className="text-sm dark:text-gray-300 lg:text-base">
            Check to see if you’re eligible to claim your handle to use <br />{' '}
            across all the apps powered by wagpay
          </span>
          <button className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-wid-indigo to-wid-purple px-6 py-2 font-medium text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              width="32"
              height="32"
              className="-ml-1 mr-2"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 16 16"
            >
              <path
                fill="currentColor"
                d="M2 3.5A1.5 1.5 0 0 1 3.5 2H11a2 2 0 0 1 2 2v.268A2 2 0 0 1 14 6v6a2 2 0 0 1-2 2H4.5A2.5 2.5 0 0 1 2 11.5v-8Zm1 0a.5.5 0 0 0 .5.5H12a1 1 0 0 0-1-1H3.5a.5.5 0 0 0-.5.5ZM10.5 8a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Z"
              ></path>
            </svg>
            {address ? address : 'Connect Wallet'}
          </button>
          <button className="inline-flex w-full items-center justify-center rounded-full border border-wid-indigo px-6 py-2 font-medium text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              width="32"
              height="32"
              className="-ml-1 mr-2 text-wid-dark dark:text-white"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M22 5.796a8.192 8.192 0 0 1-2.357.646a4.115 4.115 0 0 0 1.805-2.27a8.197 8.197 0 0 1-2.606.996a4.105 4.105 0 0 0-7.097 2.808a4.15 4.15 0 0 0 .105.935a11.65 11.65 0 0 1-8.456-4.287a4.107 4.107 0 0 0 1.27 5.478a4.084 4.084 0 0 1-1.86-.513v.052a4.105 4.105 0 0 0 3.292 4.023a4.082 4.082 0 0 1-1.081.143a4.165 4.165 0 0 1-.773-.072a4.108 4.108 0 0 0 3.832 2.85A8.261 8.261 0 0 1 2 18.282a11.611 11.611 0 0 0 6.29 1.844A11.594 11.594 0 0 0 19.962 8.453q0-.267-.013-.53A8.36 8.36 0 0 0 22 5.796Z"
              ></path>
            </svg>
            <span className="text-wid-dark dark:text-white">
              Connect Twitter
            </span>
          </button>
        </div>
      </div>
    </Layout>
  )
}

export default ClaimID
