import { Fragment, useState } from 'react'
import { Box, Button, Typography, SwipeableDrawer } from '@mui/material'
import { alpha, styled } from '@mui/material/styles'

import Header from '../components/HomeHeader'
import SideMenuList from '../components/SideMenuList'





const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: '#fff', 
  padding: '8px 24px', 
  textTransform: 'capitalize',
  borderRadius: 8,
  width: '100%',
  '&:hover': {
    backgroundColor: theme.palette.secondary.main
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
    <Box className='bg' sx={{ display: 'flex', flexDirection: 'column', height: 1 }}>
      <Box
        sx={{ 
          width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 290, 
          height: 1, 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center',
          px: 4
        }}
        role="presentation"
        //onClick={toggleDrawer(anchor, false)}
        //onKeyDown={toggleDrawer(anchor, false)}
      >
        <SideMenuList />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'flex-start', py: 4, px: 4 }}>
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
          <Header toggleHandler={toggleDrawer} anchor={anchor} />
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
            sx={{
              '& .MuiBackdrop-root': {
                bgcolor: alpha('#000', .45)
              },
              '& .MuiPaper-root': {
                bgcolor: alpha('#fff', .12)
              },
            }}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </Fragment>
      ))}
    </Fragment>
  )
}