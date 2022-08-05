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





export default function SwipeableTemporaryDrawer() {
  const [state, setState] = useState({ 
    top: false,
    left: false,
    bottom: false,
    right: false,
  })

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
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
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
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
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </Fragment>
      ))}
    </Fragment>
  )
}