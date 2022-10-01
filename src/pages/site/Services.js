import { Fragment, useEffect } from 'react'
import { Grid, Box, Typography } from '@mui/material'

import { RingMotif } from '../../components/bgMotif'
import Hero from '../../components/Hero'
import { StyledButton } from '../../components/Button'
import { Img } from '../../components/Img'
import { WhiteContrastButton } from '../../components/Button'
import { AppShowcase, Heading, Services } from './servicesComps'

import { services } from '../../data/services'





export default function() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Fragment>

      <Hero
        image='/img/drug-prescription-treatment-medication.jpg'
        pageName='services'
        pageNameClasses='bottom right'
      >
        <Box className='wrapper'>
          <Typography className='heading'> 
            mental health<br/>
            <span className='highlight'>reimagined</span>
          </Typography>
          <StyledButton variant='contained'>Get Started</StyledButton>
        </Box>
      </Hero>

      <Heading sx={{ mt: 10, mb: 10 }}>
        <Typography className='heading bg'>Services</Typography>
        <Typography className='heading fg'>
          Our Services<span className='highlight'>.</span>
        </Typography>
      </Heading>

      <Services sx={{ pt: 6, pb: 2 }}>
        {services.map((service, i) => (
          <Box key={i} className='service'>
            <Box className='col-image'>
              <RingMotif
                className='bgMotif sm'
                sx={{
                  top: -295
                }}
              ></RingMotif>
              <Img src={service.image}/>
            </Box>

            <Box className='col-info'>
              <Grid container columnSpacing={5}>

                <Grid item xs={3} className='col col-icon'>
                  <Box className='iconBox'>{service.icon}</Box>
                </Grid>
                <Grid item xs={9} className='col col-heading'>
                  <Typography className='heading'>{service.name}</Typography>
                </Grid>
                <Grid item xs={3} className='col'>
                </Grid>
                <Grid item xs={9} className='col col-text'>
                  <Typography className='text'>{service.text}</Typography>
                  <WhiteContrastButton variant='contained' >Get Started</WhiteContrastButton>
                </Grid>

              </Grid>
            </Box>
          </Box>)
        )}

      </Services>

      <AppShowcase sx={{ py: 28 }}>
        <RingMotif 
          className='bgMotif colored xl'
          sx={{
            width: '39vw!important',
            height: '39vw!important'
          }}
        ></RingMotif>
        <Grid 
          container 
          columnSpacing={0}
          className='wrapper'
        >
          <Grid item className='col-image1'>
            <Img 
              src="/img/services/child_hug-mum.webp"
            />
          </Grid>
          <Grid item className='col-text'>
            <Typography className='heading'>
              Hogme
            </Typography>
            <Typography className='text' sx={{ px: 6 }}>
              Hogme is both an in-phone experience and out-of-the phone experience, 
              where patients are allowed to request for a call to speak to an empathetic 
              listener for a possible rant or issue they want to express. 
              While out-of-the phone experience is primarily focused on home care. 
              In this case patients that want physical support from care givers can 
              place a request and state how they would love to be assisted in their homes. 
              We believe care can easily be accessed by everyone, 
              if it is been driven to every doorstep.
            </Typography>
            <Box className='getApp'>
              <Typography className='sub-heading'>
                Available on:
              </Typography>
              <Box className='links' sx={{ py: 2 }}>
                <a href='#' className='link'>
                  <img src="/img/app-store_bg-black.png" />
                </a>
                <a href='#' className='link'>
                  <img src="/img/google-play_bg-black.png" />
                </a>
              </Box>
            </Box>
          </Grid>
          <Grid item className='col-image2'>
            <Img 
              src="/img/services/girl-showing-smartphone-with-hogme-logo.jpg"
            />
          </Grid>

        </Grid>
      </AppShowcase>

    </Fragment>
  )
}