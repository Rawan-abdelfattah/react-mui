import { AccountBox, Article, Groups, Home, Nightlight, Person, Settings, Storefront } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'

const Sidebar = ({mode ,setMode}) => {
  return ( 
    <Box sx={{display:{xs:'none' , sm:'block'}}} flex={1.3} p={2}  >
        <Box position={'fixed'} sx={{width: "300px" }}>
        <List>
        <ListItem >
            <ListItemButton>
              <ListItemIcon>
              <Home/>
               </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItemButton>
          </ListItem>

          <ListItem >
            <ListItemButton component='a' href='#home'>
              <ListItemIcon>
              <AccountBox/>
               </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>

          <ListItem >
            <ListItemButton component='a' href='#home'>
              <ListItemIcon>
              <Article/>
               </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>

          <ListItem >
            <ListItemButton component='a' href='#home'>
              <ListItemIcon>
              <Groups/>
               </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>

          <ListItem >
            <ListItemButton component='a' href='#home'>
              <ListItemIcon>
              <Storefront/>
               </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>

          <ListItem >
            <ListItemButton component='a' href='#home'>
              <ListItemIcon>
              <Person/>
               </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>

          <ListItem >
            <ListItemButton component='a' href='#home'>
              <ListItemIcon>
              <Settings/>
               </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>

          <ListItem >
            <ListItemButton  >
              <ListItemIcon>
              <Nightlight/>
           
               </ListItemIcon>   <Switch onChange={e=>setMode(mode==='light' ?'dark' : 'light')}/>
             </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default Sidebar
