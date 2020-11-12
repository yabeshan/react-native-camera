import React from 'react'

import Public from './Public'
import Secure from './Secure'
import SplashScreen from './SplashScreen'
import { useStore } from '../store'

const Component = () => {
  const [{ isLoading, isLogged }] = useStore()
  
  if (isLoading) {
    const Loader = SplashScreen
    return <Loader />
  }

  const Layout = isLogged
    ? Secure
    : Public

  return <Layout />
}

export default Component
