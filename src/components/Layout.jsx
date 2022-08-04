import React from 'react'
import Header from './Header'

import { Toaster } from 'react-hot-toast'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Toaster />
    </>
  )
}

export default Layout
