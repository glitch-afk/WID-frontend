import { useEffect, useState } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

import { ThemeSelector } from '@/components/ThemeSelector'
// import CustomConnectButton from './CustomConnectButton'
import { ConnectButton } from '@rainbow-me/rainbowkit'

import React from 'react'

const Header = () => {
  let [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <header
      className={clsx(
        'sticky top-0 z-50 flex flex-wrap items-center justify-between bg-white px-4 py-5 shadow-md shadow-wid-dark/5 transition duration-500 dark:shadow-none sm:px-6 lg:px-8',
        {
          'dark:bg-wid-dark/95 dark:backdrop-blur dark:[@supports(backdrop-filter:blur(0))]:bg-wid-dark/75':
            isScrolled,
          'dark:bg-transparent': !isScrolled,
        }
      )}
    >
      <div className="mx-auto flex w-full max-w-8xl items-center">
        <div className="relative flex  flex-grow basis-0 items-center">
          <Link href="/">
            <a className="block w-fit overflow-hidden lg:w-auto">
              <span className="sr-only">Home page</span>
              <span className="text-2xl font-extrabold dark:text-white">
                Wagpay
              </span>
            </a>
          </Link>
        </div>

        <div className="relative flex flex-grow basis-0 items-center justify-end space-x-6 sm:space-x-8">
          <ThemeSelector className="relative z-10" />
          <ConnectButton />
        </div>
      </div>
    </header>
  )
}

export default Header
