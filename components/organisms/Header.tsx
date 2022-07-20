import { Avatar, Box, Divider, Hidden, IconButton, ListItem, Menu, MenuItem, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'
import MenuIcon from "../../public/assets/icons/menu-alt-2.svg";
import Logo from "../../public/assets/sm-text-logo-red.svg";
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/router';
type Props = {
  HamburgerComponent?:React.ReactElement
}

const settings = ['Your Profile', 'Settings', 'Sign Out'];
const NavLinks = [
  {
    label:"Dashboard",
    href:"/"
  },
  {
    label:"Test Prep",
    href:"/test-prep"
  },
  {
    label:"About SSAT",
    href:"/about?query=ssat"
  },
  {
    label:"About Dragon Prep",
    href:"/about?query=dragonPrep"
  },
  {
    label:"Contact Us",
    href:"/contact"
  }
]

const Header = ({HamburgerComponent}: Props) => {
  const router = useRouter()
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  
  return (
    <Box component = "header">
        <Toolbar>
          {HamburgerComponent}
          <Box sx = {{mr:8}}>
            <Image src = {Logo} />
          </Box>
          <Hidden mdDown>
            <Stack flexGrow = {1} spacing = {4} direction = "row" component = "nav">            
              {NavLinks.map((navlink, idx) => 
                <Link key = {idx} href = {navlink.href}>
                  <Typography className = {router.pathname === navlink.href ? "active":""} 
                    component = "a" variant = "body1">
                      {navlink.label}
                  </Typography>
                </Link>
              )}
            </Stack>
            <Box>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src = {'assets/test-avatar.png'} />
              </IconButton>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <ListItem>
                  <Typography variant = "body1">
                    {`Edward`}<br></br>{`edward@gmail.com`}
                  </Typography>
                </ListItem>
                <Divider />
                <Box sx = {{pt:1, pb:1, minWidth:"200px"}}>
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography component = "a" textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Box>
                <Divider />
                <MenuItem>
                  <Typography component = "a">{`Delete`}</Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Hidden>
        </Toolbar>    
    </Box>
  )
}

export default Header