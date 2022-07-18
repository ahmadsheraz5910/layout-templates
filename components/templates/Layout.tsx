import React from 'react'

type Props = {
    children:React.ReactElement | React.ReactElement[]
}

const Layout = ({children}: Props) => {
  return (
    <>
        <header></header>
        <div>
            <div className='sidebar'>
                
            </div>
            <main>{children}</main>
        </div>
    </>    
  )
}

export default Layout