/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import Layout from '@/components/Layout'
import Hero from '@/components/Hero'
import { db } from '@/utils/db'

const index = () => {
  return (
    <Layout>
      <Hero />
    </Layout>
  )
}

export default index
