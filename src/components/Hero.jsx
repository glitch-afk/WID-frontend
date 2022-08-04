/* eslint-disable @next/next/no-img-element */
import WIDButton from '@/components/WidButton'
import { useIDContext } from '@/context/IDContext'
import toast from 'react-hot-toast'
import { useRouter } from 'next/router'
import Image from 'next/image'

const Hero = () => {
  const { wagpayID, setWagpayID } = useIDContext()
  const router = useRouter()
  const validID = new RegExp('^[a-zA-Z0-9]+@wagpay$')
  // const specialChar = new RegExp("^/[`~!#$%^&*()_|+-=?;:'\",.<>{}[]\\/]/gi");

  const onSubmit = (e) => {
    e.preventDefault()
    if (!validID.test(wagpayID)) {
      toast.error('Invalid ID', {
        id: 'Invalid ID',
        duration: 3000,
        style: {
          background: 'linear-gradient(to right, #4B74FF, #9281FF)',
          color: 'white',
        },
      })
    } else {
      toast.success('Valid ID', {
        id: 'success',
        duration: 3000,
        style: {
          background: 'linear-gradient(to right, #4B74FF, #9281FF)',
          color: 'white',
        },
      })
      router.push('/claim')
    }
  }

  return (
    <>
      <div className="mt-12 flex w-full flex-col items-center space-y-6 text-center dark:text-white sm:mt-32">
        <div className="inline-block text-4xl font-bold leading-tight dark:text-white lg:text-5xl">
          Powering your finances with the Next{' '}
          <span className="dark:text-white lg:block">Chapter of Internet</span>
        </div>
        <div className="ms:px-0 inline-block px-2 text-gray-400 lg:text-lg">
          A payment solution that simplifies payment acceptance for the{' '}
          <span className="md:block">next chapter of the internet.</span>
        </div>
        {/* claim id section */}
        <form className="mx-auto w-5/6 sm:w-4/6 lg:w-5/12" onSubmit={onSubmit}>
          <div className="relative mt-1 flex items-center">
            <input
              autoFocus
              type="text"
              name="search"
              id="search"
              value={wagpayID}
              onChange={(e) => setWagpayID(e.target.value)}
              placeholder="username"
              className="block h-14 w-full rounded-md border-none pl-4 pr-12 opacity-75 outline-none dark:bg-[#4F4F4F66] sm:text-sm"
            />
            <div className="absolute inset-y-0 right-0 flex py-2 pr-1.5">
              <WIDButton />
            </div>
          </div>
        </form>
      </div>
      {/* iphone */}
      <div className="mt-16 flex w-full items-center justify-center">
        <Image
          src="/assets/iphone.svg"
          alt="iphone_image"
          width={500}
          height={500}
          priority
        />
        {/* <img src="/assets/iphone.svg" alt="iphone_image" /> */}
      </div>
    </>
  )
}

export default Hero
