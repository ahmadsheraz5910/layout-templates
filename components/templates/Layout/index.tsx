import { ThemeProvider } from '@emotion/react'
import { Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material'
import Head from 'next/head'
import React from 'react'
import theme from '../../../store/theme'
import Header from '../../organisms/Header'
import styles from './layout.module.scss';
import Image from 'next/image'
import MenuIcon from "../../../public/assets/icons/menu-alt-2.svg";
import SideBar from '../../organisms/Sidebar'

type Props = {
    children:React.ReactElement | React.ReactElement[]
}

const Layout = ({children}: Props) => {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };

    const Hamburger = () => <IconButton aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle} className = {styles.hamburger_icon}>
            <Image src = {MenuIcon} />
    </IconButton>

    return (<ThemeProvider theme = {theme}>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        </Head>
        <Header HamburgerComponent={<Hamburger />} />
        <Box className = {styles.container}>
            <Box component="nav" className = {styles.nav}>
                <Drawer variant="temporary" 
                    className = {styles.drawer_temporary}
                    ModalProps={{ 
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    sx={{'& .MuiDrawer-paper': { boxSizing: 'border-box', width: styles.drawer_width + 'px' }}} >
                    <SideBar />
                </Drawer>
                <Box className = {styles.drawer_fixed}>
                    <SideBar />
                </Box>
            </Box>
            <Box className = {styles.main} component="main">
                {children}
            </Box>
        </Box>
    </ThemeProvider>    
  )
}

export default Layout