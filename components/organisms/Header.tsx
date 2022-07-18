import { Avatar, Box, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'
import MenuIcon from "../../public/assets/icons/menu-alt-2.svg";
import Logo from "../../public/assets/sm-text-logo-red.svg";
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/router';
type Props = {}

const Header = (props: Props) => {
  const router = useRouter()
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
  return (
    <Box component = "header">
        <Toolbar>
          <IconButton>
            <Image src = {MenuIcon} />
          </IconButton>
          <Box sx = {{mr:8, ml:8}}>
            <Image src = {Logo} />
          </Box>
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
          <Avatar alt="Remy Sharp" src = {'assets/test-avatar.png'} />
        </Toolbar>    
    </Box>
  )
}

export default Header