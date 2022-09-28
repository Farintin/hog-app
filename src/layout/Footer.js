import { NavLink } from 'react-router-dom'
import { Box, Container, IconButton, Button, Typography, Grid, Link } from '@mui/material'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { alpha, styled } from '@mui/material/styles'
import SvgIcon from '@mui/material/SvgIcon';





const Footer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  '& .circles': {
    width: 400,
    height: 400,
    position: 'relative',
    '& .circle': {
      borderRadius: '50%',
      position: 'absolute',
      zIndex: 0,
      '&.one': {
        backgroundColor: theme.palette.secondary.main
      },
      '&.two': {
        backgroundColor: '#fff'
      }
    },
    '& .wrapper': {
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      backgroundColor: alpha(theme.palette.primary.main, .6),
      position: 'relative',
      padding: 4,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 0
    }
  },
  '& .text': {
    fontSize: '81%',
    fontWeight: 500,
    color: '#fff'
  },
  '& .sub-heading': {
    fontSize: '78%',
    fontWeight: 500,
    color: '#fff',
    '& .highlight': {
      fontSize: '96%',
      fontWeight: 200,
      fontStyle: 'italic'
    }
  },
  '& .col-2': {
    '& > *': {
      marginLeft: 8,
      marginBottom: 16
    },
    '& .getApp': {
      '& .links': {
        display: 'flex',
        '& .link': {
          borderRadius: 8,
          //backgroundColor: theme.palette.secondary.main,
          marginRight: 12,
          display: 'flex',
          width: 100,
          '& img': {
            width: '100%',
            borderRadius: 'inherit'
          }
        }
      }
    },
    '& .social-links': {
      display: 'flex',
      '& .link': {
        marginRight: 16,
        backgroundColor: '#fff',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        '&:hover': {
          backgroundColor: theme.palette.secondary.main,
          '& .icon': {
            stroke: '#fff'
          }
        }
      }
    },
    '& .resources': {
      display: 'flex',
      '& .link': {
        marginRight: 32,
        color: '#eee',
        textTransform: 'capitalize',
        textDecoration: 'none',
        fontSize: '78%',
        fontWeight: 300,
        '&:hover': {
          color: theme.palette.secondary.dark,
          textDecoration: 'underline'
        }
      }
    }
  }
}))

const BrandLogo = styled('img')(({theme}) => ({
  width: 54
}))

const Icon = styled('svg')(({theme}) => ({
  width: 20,
  fill: 'none',
  stroke: theme.palette.primary.main,
  strokeWidth: 2.4,
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
}))






export default function() {
  return (
    <Footer sx={{ py: 8, mt: 8 }}>
      <Container>
        <Grid container spacing={2}>

          <Grid item xs={9} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box className='circles' sx={{ mt: 8 }}>
              <Box className='circle one'
                sx={{
                  width: .5,
                  height: .5,
                  top: '-15%',
                  left: '-15%'
                }}
              ></Box>
              <Box className='circle two'
                sx={{
                  width: .35,
                  height: .35,
                  bottom: '-3%',
                  right: '-3%'
                }}
              ></Box>

              <Box className='wrapper'>
                <Typography 
                  sx={{
                    fontSize: '135%',
                    fontWeight: 500,
                    color: '#fff',
                    textAlign: 'center',
                    px: 8
                  }}
                >
                  Discover a new world of health utilities.
                </Typography>
                <NavLink 
                    to='getstarted' 
                    style={{ 
                        textDecoration: 'none',
                        color: '#fff',
                        fontWeight: 300,
                        fontSize: '108%',
                        fontStyle: 'italic',
                        lineHeight: 1.3,
                        display: 'flex',
                        alignItems: 'center',
                        marginTop: 16
                    }}
                >
                    Get Started
                    <ChevronRightIcon sx={{ fontSize: '150%', ml: -.75, mt: -.1 }} />
                </NavLink>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={3} className='col-2'>
            <a 
              href="/" 
              style={{ 
                textDecoration: 'none', 
                display: 'flex', 
                alignItems: 'center',
                marginLeft: 0
              }}
            >
                <BrandLogo src="/logo/hog_logo_gold_titleless_w-50.png" />
                <Typography 
                    sx={{ 
                        fontSize: '150%', 
                        fontWeight: 700, 
                        fontFamily: 'Product Sans!important', 
                        color: '#fff',
                        lineHeight: '85%',
                        letterSpacing: -3,
                        ml: -.5
                    }}
                >
                  H<span style={{ fontSize: '130%', color: '#ead298' }}>O</span>G
                </Typography>
            </a>
            <Typography className='text' sx={{ pr: '10%' }}>
              Better health from hog.
              An intentional different approach to care.
            </Typography>

            <Box className='getApp' sx={{ py: 4 }}>
              <Typography className='sub-heading'>
                DOWNLOAD THE <span className='highlight'> Hog-me app</span>
              </Typography>
              <Box className='links' sx={{ py: 1.5 }}>
                <a href='#' className='link'>
                  <img src="/img/app-store_bg-black.png" />
                </a>
                <a href='#' className='link'>
                  <img src="/img/google-play_bg-black.png" />
                </a>
              </Box>
            </Box>

            <Box className='social-links' sx={{ pb: 4 }}>
              <a href='#' className='link'>
                <Icon 
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24" 
                    className="icon feather feather-facebook"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </Icon>
              </a>
              <a href='#' className='link'>
                <Icon
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="icon feather feather-twitter"
                >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 
                        10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 
                        4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </Icon>
              </a>
              <a href='#' className='link'>
                <Icon
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="icon feather feather-instagram"
                >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </Icon>
              </a>
            </Box>

            <Box className='resources' sx={{ py: 1 }}>
              <a href='#' className='link'>
                terms & conditions
              </a>
              <a href='#' className='link'>
                privacy policy 
              </a>
            </Box>

            <Typography className='text' sx={{ mb: '0!important' }}>
              2022 All rights reserved
            </Typography>
          </Grid>

        </Grid>
      </Container>
    </Footer>
  )
}