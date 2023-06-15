import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router'
import Body from './components/Body'
import Footer from './components/Footer'

const RootLayOut = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Body />
      <Footer />

    </>
  )
}

export default RootLayOut
