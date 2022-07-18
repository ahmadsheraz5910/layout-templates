import { ThemeProvider } from '@emotion/react'
import Head from 'next/head'
import React from 'react'
import theme from '../../store/theme'
import Header from '../organisms/Header'

type Props = {
    children:React.ReactElement | React.ReactElement[]
}

const Layout = ({children}: Props) => {
  return (
    <ThemeProvider theme = {theme}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      <div>
          <div className='sidebar'></div>
          <main>{children}</main>
      </div>
    </ThemeProvider>    
  )
}

export default Layout