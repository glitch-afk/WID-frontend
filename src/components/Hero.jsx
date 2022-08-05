/* eslint-disable @next/next/no-img-element */
import WIDButton from '@/components/WidButton'
import { useIDContext } from '@/context/IDContext'
import toast from 'react-hot-toast'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { find_wagpay_id } from '@/utils/db'
import { useEffect, useRef } from 'react'

const Hero = () => {
  const { wagpayID, setWagpayID } = useIDContext()
  const ref = useRef()
  const router = useRouter()
  const validID = new RegExp('^[a-zA-Z0-9]+@wagpay$')
  // const specialChar = new RegExp("^/[`~!#$%^&*()_|+-=?;:'\",.<>{}[]\\/]/gi");

  const onSubmit = async (e) => {
    e.preventDefault()
    var toastId = toast.loading('Checking...', {
      style: {
        background: 'linear-gradient(to right, #4B74FF, #9281FF)',
        color: 'white',
      },
    })

    if (wagpayID === '@wagpay') {
      toast.error("Invalid ID - ID can't be empty", {
        id: toastId,
        duration: 3000,
        style: {
          background: 'linear-gradient(to right, #4B74FF, #9281FF)',
          color: 'white',
        },
      })
      return
    }

    if (wagpayID.split('@')[0].length <= 3) {
      toast.error('Invalid ID - ID should be greater than 3 chars', {
        id: toastId,
        duration: 3000,
        style: {
          background: 'linear-gradient(to right, #4B74FF, #9281FF)',
          color: 'white',
        },
      })
      return
    }

    const found = await find_wagpay_id(wagpayID)
    if (!validID.test(wagpayID) || found) {
      toast.error('Invalid ID', {
        id: toastId,
        duration: 3000,
        style: {
          background: 'linear-gradient(to right, #4B74FF, #9281FF)',
          color: 'white',
        },
      })
    } else {
      toast.success('Valid ID', {
        id: toastId,
        duration: 3000,
        style: {
          background: 'linear-gradient(to right, #4B74FF, #9281FF)',
          color: 'white',
        },
      })
      router.push('/claim')
    }
  }

  useEffect(() => {
    ref.current.setSelectionRange(0, 0)
    ref.current.focus()
  }, [])

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
          <div className="relative flex h-14 w-full items-center justify-center rounded-md border-none pl-4 pr-12 opacity-75 outline-none dark:bg-[#4F4F4F66] sm:text-sm">
            <input
              ref={ref}
              autoFocus
              type="text"
              name="search"
              id="search"
              value={
                wagpayID.includes('@wagpay') ? wagpayID : wagpayID + '@wagpay'
              }
              onChange={(e) => setWagpayID(e.target.value)}
              placeholder="sbf@wagpay"
              className="w-full bg-transparent outline-none"
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
