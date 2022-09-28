import { Fragment, useEffect } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment'
import BadgeIcon from '@mui/icons-material/Badge'
import MailIcon from '@mui/icons-material/Mail'
import TitleIcon from '@mui/icons-material/Title'
import MessageIcon from '@mui/icons-material/Message'
import SendIcon from '@mui/icons-material/Send'

import Hero from '../../components/Hero'
import { WhiteContrastButton } from '../../components/Button'
import { RingMotif } from '../../components/bgMotif'
import { Contact, Form } from './contactComps'









export default function() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Fragment>

      <Hero
        image='/img/robot-handshake-human.jpg'
        pageName='contact'
        contentPosition='center'
      >
        <Box className='wrapper'>
          <Typography className='heading'> 
            <span className='highlight'>24/7</span>
          </Typography>
        </Box>
      </Hero>



      <Contact>
        <Box className='wrapper'>
          <Typography className='heading'>
            Love to hear from <br/>
            you... 
            <img
              src="/img/waving-hand_emoji.png"
              style={{
                width: 48,
                marginLeft: 8
              }}
            />
          </Typography>
          <Grid container spacing={4} className='main' sx={{ mt: 8 }}>

            <Grid item xs={6} className='col col-1'>
              <Box className='wrapper'>
                <Typography className='heading'>
                  Get in touch
                </Typography>

                <Typography className='text'>
                  Due to COVID-19, our team are working remotely. 
                  Please email us or request a callback.
                </Typography>

                <Box className='row'>
                  <Typography className='heading'>
                    Phone
                  </Typography>
                  <Box>
                    <Typography className='text'>
                      +44-734-1139-865
                    </Typography>
                  </Box>
                </Box>
                <Box className='row'>
                  <Typography className='heading'>
                    email
                  </Typography>
                  <Box>
                    <Typography className='text'>
                      <span className='highlight'>info@hogme.life </span>
                      (enquiries)
                    </Typography>
                    <Typography className='text'>
                      <span className='highlight'>partner@hogme.life </span>
                      (sponsorship/partnership)
                    </Typography>
                  </Box>
                </Box>
                <Box className='row'>
                  <Typography className='heading'>
                    office
                  </Typography>
                  <Box>
                    <Typography className='text'>
                      2 Dunstable RD, LutonLU1 1DX, UK.
                    </Typography>
                  </Box>
                </Box>
              </Box>

            </Grid>
            <Grid item xs={6} className='col col-2'>
               
              <Form container> 
                <RingMotif 
                  className='bgMotif colored sm'
                  sx={{
                    top: '-155px!important',
                    right: '-155px!important'
                  }}
                ></RingMotif>
                <RingMotif 
                  className='bgMotif colored sm'
                  sx={{
                    bottom: '-155px!important',
                    left: '-155px!important'
                  }}
                ></RingMotif>

                <Grid item xs={6}>
                  <InputLabel 
                    htmlFor="fName"
                  >
                    First name
                  </InputLabel>
                  <TextField
                    fullWidth
                    label=""
                    id="fName"
                    placeholder='Type name'
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <BadgeIcon />
                        </InputAdornment>
                      ),
                    }}
                    margin='dense'
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputLabel htmlFor="fName">
                    Last name
                  </InputLabel>
                  <TextField
                    fullWidth
                    label=""
                    id="lName"
                    placeholder='Type name'
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <BadgeIcon />
                        </InputAdornment>
                      ),
                    }}
                    margin='dense'
                  />
                </Grid>
                <Grid item xs={12}>
                  <InputLabel htmlFor="fName">
                    Email
                  </InputLabel>
                  <TextField
                    fullWidth
                    label=""
                    id="email"
                    placeholder='Type email'
                    type='email'
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <MailIcon />
                        </InputAdornment>
                      ),
                    }}
                    margin='dense'
                  />
                </Grid>
                <Grid item xs={12}>
                  <InputLabel htmlFor="fName">
                    Subject
                  </InputLabel>
                  <TextField
                    fullWidth
                    label=""
                    id="subject"
                    placeholder='Type the subject matter'
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <TitleIcon />
                        </InputAdornment>
                      ),
                    }}
                    margin='dense'
                  />
                </Grid>
                <Grid item xs={12}>
                  <InputLabel htmlFor="fName">
                    Message
                  </InputLabel>
                  <TextField
                    fullWidth
                    label=""
                    multiline
                    id="msg"
                    placeholder='Type message'
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <MessageIcon />
                        </InputAdornment>
                      ),
                    }}
                    margin='dense'
                    rows={8}
                  />
                </Grid>

                <Grid item xs={12}>
                  <WhiteContrastButton
                    variant='contained'
                    className='submit'
                    sx={{ px: 8 }}
                  >
                    Send
                    <SendIcon sx={{
                        position: 'absolute',
                        right: 8*3
                      }}
                    />
                  </WhiteContrastButton>
                </Grid>

              </Form>
            </Grid>

          </Grid>
        </Box>
      </Contact>

    </Fragment>
  )
}