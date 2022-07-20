import * as React from 'react';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Image from 'next/image';
import DocumentReportIcon from '../../public/assets/icons/document-report.svg';
import ChevronDownIcon from '../../public/assets/icons/chevron-down.svg';
import CollectionIcon from '../../public/assets/icons/collection.svg';
import ClipboardListIcon from '../../public/assets/icons/clipboard-list.svg';
import InboxInIcon from '../../public/assets/icons/inbox-in.svg';
import LockClosedIcon from '../../public/assets/icons/lock-closed.svg';
import SupportIcon from '../../public/assets/icons/support.svg';
import CogIcon from '../../public/assets/icons/cog.svg';
import { Box } from '@mui/material';

const Links_1 = [
  {
    text:'Practice Tests',
    icon:<Image src = {DocumentReportIcon} />    
  },
  {
    text:'Score Reports',
    icon:<Image src = {InboxInIcon} />    
  },
  {
    text:'Guides',
    icon:<Image src = {LockClosedIcon} />    
  }
]
const Links_2 = [
  {
    text:'Contact Us',
    icon:<Image src = {ClipboardListIcon} />    
  },
  {
    text:'FAQs ',
    icon:<Image src = {CollectionIcon} />    
  },
  {
    text:'Sign Out',
    icon:<Image src = {SupportIcon} />    
  } 
]
const Links_3 = [
  {
    text:'Settings',
    icon:<Image src = {CogIcon} />    

  }
]

export default function SideBar() {

  return (
    <Box component = "nav" display = "flex" flexDirection = "column" sx = {{height:"100%"}}>
      <List >
        {Links_1.map((link, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <Box display = "flex" alignItems = "center" sx = {{mr:2}}>
                {link.icon}
              </Box>
              <ListItemText primary={link.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List >
        {Links_2.map((link, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <Box display = "flex" alignItems = "center" sx = {{mr:2}}>
                {link.icon}
              </Box>
              <ListItemText primary={link.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List sx = {{mt:"auto"}}>
        {Links_3.map((link, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <Box display = "flex" alignItems = "center" sx = {{mr:2}}>
                {link.icon}
              </Box>
              <ListItemText primary={link.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
    
  );
}
