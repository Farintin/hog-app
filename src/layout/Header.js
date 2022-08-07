<<<<<<< HEAD
import { Fragment, useState } from 'react'
import { Box, IconButton, Button, Typography, SwipeableDrawer, Divider } from '@mui/material'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { alpha, styled } from '@mui/material/styles'

import AppBar from '../components/Header'
import SideMenuList from '../components/SideMenuList'





const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: '#fff', 
  padding: '8px 24px', 
  textTransform: 'capitalize',
  borderRadius: 8,
  width: '100%',
  '&:hover': {
    backgroundColor: theme.palette.secondary.dark
  } 
}))


=======
import * as React from 'react';
import { AppBar, Box, Toolbar, IconButton, Button, Typography, Avatar, Badge, SwipeableDrawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { Menu, Home, Business, CloseRounded, Reviews, Call, LiveHelp, Work, Info } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import style from './Header.module.css';



const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));
>>>>>>> e25a6c8374dcf2388582ba72f88a3059f8483d2d



export default function SwipeableTemporaryDrawer() {
<<<<<<< HEAD
  const [state, setState] = useState({ 
=======
  const [state, setState] = React.useState({
>>>>>>> e25a6c8374dcf2388582ba72f88a3059f8483d2d
    top: false,
    left: false,
    bottom: false,
    right: false,
<<<<<<< HEAD
  })
=======
  });
>>>>>>> e25a6c8374dcf2388582ba72f88a3059f8483d2d

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
<<<<<<< HEAD
      return
    }
    setState({ ...state, [anchor]: open })
  }
  const list = (anchor) => (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        height: 1
      }}
    >
      <Box 
        sx={{ 
          display: 'flex', 
          p: 1, 
          px: 1
        }}
      >
        <IconButton onClick={toggleDrawer(anchor, false)}>
          <ChevronRightIcon/>
        </IconButton>
      </Box>
      <Divider 
        sx={{
          borderColor: alpha('#000', 0)
        }}
      />

      <Box
        sx={{ 
          width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 290, 
          height: 1, 
          display: 'flex', 
          flexDirection: 'column', 
          px: 3, 
          mt: 4
        }}
=======
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
        <IconButton onClick={toggleDrawer(anchor, false)}>
          <CloseRounded sx={{ fontSize: 32 }}/>
        </IconButton>
      </Box>
      <Box
        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
>>>>>>> e25a6c8374dcf2388582ba72f88a3059f8483d2d
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
<<<<<<< HEAD
        <SideMenuList />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'flex-start', p: 2, px: 4 }}>
        <StyledButton onClick={toggleDrawer(anchor, false)}>
          <Typography>Get Started</Typography>
        </StyledButton>
      </Box>
    </Box>
  )

  return (
    <Fragment>
      {['right'].map((anchor) => (
        <Fragment key={anchor}>
          <AppBar toggleHandler={toggleDrawer} anchor={anchor} />
=======
        <List sx={{ color: '#4cae4c' }}>
            <ListItem>
              <ListItemButton sx={{ color: 'inherit'}}>
                <ListItemIcon sx={{ color: 'inherit'}}>
                  <Home />
                </ListItemIcon>
                <ListItemText primary={'Home'} className={style.menuItemText}/>
              </ListItemButton>
            </ListItem>
            <Box sx={{ padding: '0px 32px'}}><Divider/></Box>
            <ListItem>
              <ListItemButton sx={{ color: 'inherit'}}>
                <ListItemIcon sx={{ color: 'inherit'}}>
                  <Business />
                </ListItemIcon>
                <ListItemText primary={'Business'} className={style.menuItemText}/>
              </ListItemButton>
            </ListItem>
            <Box sx={{ padding: '0px 32px'}}><Divider/></Box>
            <ListItem>
              <ListItemButton sx={{ color: 'inherit'}}>
                <ListItemIcon sx={{ color: 'inherit'}}>
                  <Info />
                </ListItemIcon>
                <ListItemText primary={'About'} className={style.menuItemText}/>
              </ListItemButton>
            </ListItem>
            <Box sx={{ padding: '0px 32px'}}><Divider/></Box>
            <ListItem>
              <ListItemButton sx={{ color: 'inherit'}}>
                <ListItemIcon sx={{ color: 'inherit'}}>
                  <LiveHelp />
                </ListItemIcon>
                <ListItemText primary={'FAQ'} className={style.menuItemText}/>
              </ListItemButton>
            </ListItem>
            <Box sx={{ padding: '0px 32px'}}><Divider/></Box>
            <ListItem>
              <ListItemButton sx={{ color: 'inherit'}}>
                <ListItemIcon sx={{ color: 'inherit'}}>
                  <Reviews />
                </ListItemIcon>
                <ListItemText primary={'Reviews'} className={style.menuItemText}/>
              </ListItemButton>
            </ListItem>
            <Box sx={{ padding: '0px 32px'}}><Divider/></Box>
            <ListItem>
              <ListItemButton sx={{ color: 'inherit'}}>
                <ListItemIcon sx={{ color: 'inherit'}}>
                  <Work />
                </ListItemIcon>
                <ListItemText primary={'Therapist Jobs'} className={style.menuItemText}/>
              </ListItemButton>
            </ListItem>
            <Box sx={{ padding: '0px 32px'}}><Divider/></Box>
            <ListItem>
              <ListItemButton sx={{ color: 'inherit'}}>
                <ListItemIcon sx={{ color: 'inherit'}}>
                  <Call />
                </ListItemIcon>
                <ListItemText primary={'Contact'} className={style.menuItemText}/>
              </ListItemButton>
            </ListItem>
        </List>
        <Divider />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'flex-start', padding: '16px 32px' }}>
        <Button 
          sx={{ 
            bgcolor: '#4cae4c', 
            color: '#fff', 
            padding: '8px 24px', 
            textTransform: 'capitalize',
            '&:hover': {
              bgcolor: '#5cb85c'
            } 
          }} 
          onClick={toggleDrawer(anchor, false)}
        >
          <Typography>Get Started</Typography>
        </Button>
      </Box>
    </>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Box sx={{ flexGrow: 0, width: 1 }}>
              <AppBar position="static" sx={{ boxShadow: 0 }}>
                  <Toolbar sx={{ justifyContent: 'space-between'}}>
                      <StyledBadge
                          overlap="circular"
                          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                          variant="dot"
                      >
                          <Avatar alt="Remy Sharp" src="avatar.jpg" sx={{ border: '2px solid #fff' }} />
                      </StyledBadge>

                      <IconButton
                          size="small"
                          edge="start"
                          color="inherit"
                          aria-label="menu"
                          onClick={toggleDrawer(anchor, true)}
                      >
                          <Menu sx={{ fontSize: 28 }} />
                      </IconButton>
                  </Toolbar>
              </AppBar>
          </Box>

>>>>>>> e25a6c8374dcf2388582ba72f88a3059f8483d2d
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
<<<<<<< HEAD
        </Fragment>
      ))}
    </Fragment>
  )
=======
        </React.Fragment>
      ))}
    </div>
  );
>>>>>>> e25a6c8374dcf2388582ba72f88a3059f8483d2d
}