import Footer from '@/components/layout/Footer'
import Navigation from '@/components/layout/Navbar'
import { LayoutProps } from '@/types'
import React from 'react'

const Layout = ({children}:LayoutProps) => {
  return (
    <>
    <Navigation />
    {children}
    <Footer/>
    </>
  )
}

export default Layout