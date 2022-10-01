import { Fragment, useEffect } from 'react'
import { Container, Grid, Box, Typography } from '@mui/material'
import { alpha } from '@mui/material/styles'

import CheckSharpIcon from '@mui/icons-material/CheckSharp'

import { RingMotif } from '../../components/bgMotif'
import Hero from '../../components/Hero'
import { StyledButton } from '../../components/Button'
import { Img } from '../../components/Img'
import { 
  AboutBox, 
  ResearchBox, 
  MissionBox, 
  ObjectiveBox, 
  ConclusionBox,
  ResearchImg,
  ConclusionImg
} from './aboutComps'





export default function() {
  let researchCol1ImgW = 170
  let researchCol2ImgW = 165
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Fragment>
      
      <Hero
        image='/img/robot-hand-is-holding-red-heart.jpg'
        pageName='about us'
        pageNameClasses='bottom right'
      >
        <Box className='wrapper'>
          <Typography className='heading'> 
            we are here to<br/>
            <span className='highlight'>help</span>
          </Typography>
          <StyledButton variant='contained'>Get Started</StyledButton>
        </Box>
      </Hero>

      <ResearchBox sx={{ py: 12 }}>
        <Grid container spacing={2}>
          <Grid item xs={4} sx={{ display: 'flex', alignItems: 'flex-end' }}>

            <Grid container spacing={3}>
              <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-end', position: 'relative' }}>
                <RingMotif
                  className='bgMotif n1 lg colored'
                  sx={{
                    bottom: '60%',
                    right: '-80%'
                  }}
                ></RingMotif>
                <ResearchImg
                  src="/img/about/research/boomer.webp"
                  sx={{ width: researchCol1ImgW, height: researchCol1ImgW*1.5, mt: 6 }}
                />
              </Grid>
              <Grid item xs={6} sx={{ display: 'flex' }}>
                <ResearchImg
                  src="/img/about/research/genz.jpg"
                  sx={{ width: researchCol1ImgW, height: researchCol1ImgW*1.5 }}
                />
              </Grid>
            </Grid>

          </Grid>

          <Grid item xs={4} sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ p: 2, py: 12 }}>
              <Typography className='text'>
                Research shows that <span className='highlight'>62%</span> of M-Genz and <span className='highlight'>20%</span> of boomers are bothered by feeling nervous, 
                anxious, or on edge more than half the days or nearly every day. 
                <span className='highlight'> 56%</span> of M-Genz and <span className='highlight'>30%</span> of boomers report not being able to stop or control worrying more than half the time or nearly every day. 
                <span className='highlight'> 35%</span> of M-Genz and <span className='highlight'>10%</span> of boomers have been bothered by having little interest or pleasure in doing things nearly every day.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={4} sx={{ height: 1 }}>

            <Grid container spacing={3} sx={{ height: .5 }}>
              <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', position: 'relative' }}>
                <RingMotif
                  className='bgMotif n2'
                  sx={{
                    top: '40%',
                    left: '40%'
                  }}
                ></RingMotif>
                <ResearchImg
                  src="/img/about/research/anxious.jpg"
                  sx={{ width: researchCol2ImgW, height: researchCol2ImgW }}
                />
              </Grid>
              <Grid item xs={6} sx={{  }}>   
                <Grid container spacing={3} sx={{ height: 1 }}>
                  <Grid item xs={12} sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <ResearchImg
                      src="/img/about/research/bored.webp"
                      sx={{ width: researchCol2ImgW*.8, height: researchCol2ImgW*.8 }}
                    />
                  </Grid>
                  <Grid item xs={12} sx={{  }}>
                    <ResearchImg
                      src="/img/about/research/worried.jpg"
                      sx={{ width: researchCol2ImgW*.6, height: researchCol2ImgW*.6, boxShadow: '0 32px 64px -32px black' }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

          </Grid>

        </Grid>
      </ResearchBox>
      
      <AboutBox sx={{ py: 8, }}>
        <Container sx={{ my: 4 }}>
          <Typography 
            className='heading-bg'
            sx={{ 
              textAlign: 'center' 
            }}
          >
            Healin<span className='squeeze'>g O</span><span className='squeeze'>n t</span>h<span className='squeeze'>e G</span>o
          </Typography>
          <Typography 
            className='heading-fg'
            sx={{ 
              textAlign: 'center' 
            }}
          >
            Healin<span className='squeeze'>g O</span><span className='squeeze'>n t</span>h<span className='squeeze'>e G</span>o
          </Typography>
        </Container>
        <Container>
          <Typography className='text' sx={{ px: 10, textAlign: 'center' }}>
            <span style={{ fontWeight: 800, fontSize: '111%',color: '#a38fc0' }}>HOG </span> 
            <span style={{ fontWeight: 700, color: '#000' }}>(</span>
            <span style={{ fontWeight: 700, color: '#000' }}>healing-on-the-go</span>
            <span style={{ fontWeight: 700, color: '#000' }}>) </span> 
            is an empathetic AI therapist that is primarily 
            built on the concept of cognitive behavioral 
            therapy to support people dealing with mental illness and provide easy access to affordable mental health care through 
            our systematic ways of bringing care closer to people.
          </Typography>
        </Container>
      </AboutBox>

      <MissionBox sx={{ py: 12, pb: 24 }}>
        <Grid container spacing={2}>

          <Grid item xs={6}>
            
            <Grid container spacing={2} sx={{ position: 'relative' }}>
              <Grid item xs={9} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Img
                  src="/img/about/mission/medium-shot-man-wearing-vr-glasses.jpg"
                  sx={{ width: 360, height: 360, boxShadow: 0 }}
                />
              </Grid>
              <Grid item xs={3} sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <Img
                  src="/img/about/mission/Woman-Wheelchair-Doctor-Office-Therapy.png"
                  sx={{ width: 180, height: 180, position: 'relative', bottom: -75-32, left: -75 }}
                />
              </Grid>
              <Grid item xs={9}></Grid>
              <Grid item xs={3} sx={{ height: 180 }}>
              </Grid>
            </Grid>

          </Grid>

          <Grid item xs={6}>
            
              <Grid container spacing={2}>

                <Grid item xs={2} className='col-icon'>
                  <Box className='iconBox'>
                    <svg 
                        version="1.1" 
                        id="Layer_1" 
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px" 
                        y="0px" 
                        viewBox="0 0 122.88 120.81" 
                        className='icon'
                        style={{
                          enableBackground: 'new 0 0 122.88 120.81'
                        }}
                    >
                        <g>
                            <path d="M15.44,85.83c1.26-0.98,3.08-0.75,4.06,0.51c0.98,1.26,0.75,3.08-0.51,
                            4.06l-13.1,10.17l-0.1,13.39l15.78-0.88l8.73-13.87 c0.85-1.35,2.63-1.75,
                            3.98-0.9c1.35,0.85,1.75,2.63,0.9,3.98l-9.47,15.05c-0.47,0.81-1.33,1.37-2.34,
                            1.43L3.04,119.9l0,0 c-0.06,0-0.11,0-0.17,0c-1.59-0.01-2.88-1.3-2.87-2.89l0.13-17.65c-0.07-0.93,
                            0.32-1.88,1.11-2.5L15.44,85.83L15.44,85.83z M40.28,53.81c6.59-19.69,15.46-33.64,
                            27.95-42.44C81.2,2.25,97.86-1.21,119.69,0.37c1.51,0.11,2.66,1.35,2.69,2.83 c2.11,
                            23.64-2.47,40.4-12.25,53.1C100.71,68.51,86.6,76.77,69.07,83.7v23.07c0,1.13-0.65,
                            2.11-1.6,2.59l-17.84,11.02 c-1.35,0.84-3.13,0.42-3.97-0.94c-0.22-0.36-0.36-0.75-0.41-1.14l0,
                            0c-3.95-30.19-8.15-31.64-32.83-40.18 C9.48,77.1,6.29,76,4.14,75.24c-1.5-0.53-2.29-2.18-1.76-3.69c0.11-0.32,
                            0.28-0.61,0.48-0.86l11.76-16.77 c0.59-0.84,1.54-1.27,2.5-1.23v0L40.28,53.81L40.28,53.81z M84.68,25.72c3.36,
                            0,6.4,1.36,8.6,3.56c2.2,2.2,3.56,5.24,3.56,8.6 c0,3.36-1.36,6.4-3.56,8.6c-2.2,2.2-5.24,3.56-8.6,3.56c-3.36,
                            0-6.4-1.36-8.6-3.56c-2.2-2.2-3.56-5.24-3.56-8.6 c0-3.36,1.36-6.4,3.56-8.6C78.28,27.08,81.32,
                            25.72,84.68,25.72L84.68,25.72z M90.48,32.08c-1.48-1.48-3.53-2.4-5.8-2.4 c-2.26,0-4.31,
                            0.92-5.8,2.4c-1.48,1.48-2.4,3.53-2.4,5.8c0,2.26,0.92,4.31,2.4,5.8c1.48,1.48,3.53,2.4,5.8,2.4 
                            c2.26,0,4.31-0.92,5.8-2.4c1.48-1.48,2.4-3.53,2.4-5.8C92.88,35.61,91.96,33.56,90.48,
                            32.08L90.48,32.08z M71.55,16.1 c-11.81,8.32-20.18,21.94-26.43,41.43c-0.34,
                            1.29-1.54,2.22-2.93,2.15l-23.77-1.16L9.64,71.05c1.86,0.65,3.29,1.15,4.66,
                            1.62 c26.32,9.1,31.79,10.99,36.07,40.47l12.91-7.97V81.74h0.01c0-1.16,0.71-2.25,
                            1.85-2.69c17.46-6.72,31.41-14.6,40.41-26.28 c8.59-11.15,12.75-25.95,11.26-46.79C97.58,
                            4.92,82.89,8.13,71.55,16.1L71.55,16.1z"/>
                        </g>
                    </svg>
                  </Box>
                </Grid>
                <Grid item xs={10} className='col-heading'>
                  <Typography className='heading'>
                    Our <span className='highlight'>Mission</span>
                  </Typography>
                </Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={10}>
                  <Typography className='text' sx={{ pr: 2 }}>
                    Hog aims to be a resource to equip individuals with the tools they need to re-engineer their negative thoughts, 
                    calm their anxieties & track their mood by offering users evidence based cognitive behavioral therapy techniques 
                    and leveraging artificial intelligence to constantly improve its conversational abilities. In practice, 
                    it allows people to open up more easily to humans after speaking to hog because they’ve simulated that experience 
                    of being emotionally vulnerable. 
                  </Typography>
                </Grid>

              </Grid>
          </Grid>

        </Grid>
      </MissionBox>



      <ObjectiveBox>
        <Box className='wrapper'>
          <RingMotif
            className='bgMotif n4 colored'
            sx={{
              top: -295,
              right: -295
            }}
          ></RingMotif>
          <RingMotif
            className='bgMotif n5 colored'
            sx={{
              bottom: -295,
              left: -295
            }}
          ></RingMotif>
          
          <Box
            className='bgInternalMotif'
            sx={{
              bottom: 0,
              left: 0,
              borderRadius: '0 100% 0 64px',
              zIndex: 0
            }}
          ></Box>
          <Box
            className='bgInternalMotif'
            sx={{
              top: 0,
              right: 0,
              borderRadius: '0 64px 0 100%',
              zIndex: 0
            }}
          ></Box>
          
          <Grid container spacing={2} sx={{ position: 'relative', mb: 12 }}>

            <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Grid container spacing={2}>

                <Grid item xs={2} className='col-icon'>
                  {/*<Box className='heading-sign'></Box>*/}
                  <Box className='iconBox'>
                    <svg 
                        version="1.1" 
                        id="Layer_1" 
                        xmlns="http://www.w3.org/2000/svg" 
                        x="0px" 
                        y="0px" 
                        viewBox="0 0 122.879 103.148" 
                        enableBackground="new 0 0 122.879 103.148" 
                        className='icon'
                        style={{ marginLeft: 4 }}
                    >
                        <g>
                            <path d="M55.36,52.179c-0.484,0.284-1.038,0.346-1.542,0.216c-0.504-0.131-0.958-0.455-1.243-0.938l0-0.001 
                            c-0.284-0.484-0.346-1.039-0.215-1.542c0.13-0.503,0.453-0.958,0.936-1.242l0,0l36.073-21.556l3.195-9.961l0,
                            0 c0.079-0.247,0.2-0.469,0.353-0.659c0.16-0.198,0.354-0.362,0.569-0.487L111.88,5.385h0.001c0.488-0.282,
                            1.045-0.34,1.548-0.205 c0.505,0.135,0.958,0.463,1.24,0.951v0.001c0.142,0.246,0.227,0.506,0.259,
                            0.769c0.033,0.27,0.012,0.542-0.06,0.8L113.233,16 l8.298,2.988c0.529,0.19,0.933,0.578,1.154,
                            1.049c0.222,0.471,0.264,1.028,0.074,1.557c-0.084,0.233-0.205,0.44-0.354,0.618 c-0.099,0.118-0.211,
                            0.225-0.333,0.316l0.011,0.017l-0.222,0.128l-18.396,10.621l0,0c-0.264,0.152-0.549,0.239-0.835,
                            0.266 c-0.297,0.027-0.594-0.011-0.869-0.109l-10.344-2.82L55.362,52.178L55.36,52.179L55.36,
                            52.179L55.36,52.179z M64.92,1.768 c4.658,1.249,8.996,3.097,12.952,5.44c4.088,2.421,7.77,5.37,
                            10.977,8.732c0.146,0.152,0.139,0.394-0.014,0.539 c-0.01,0.01-0.021,0.02-0.032,0.028l0,0l-2.872,
                            2.172c-0.16,0.121-0.387,0.096-0.517-0.054c-2.913-2.998-6.243-5.628-9.93-7.79 
                            c-3.573-2.096-7.487-3.752-11.687-4.878c-6.179-1.655-12.4-2.005-18.37-1.219c-6.202,0.817-12.133,
                            2.86-17.466,5.939v0 c-5.334,3.08-10.069,7.195-13.877,12.157c-3.666,4.777-6.473,10.339-8.128,
                            16.518c-1.655,6.179-2.005,12.4-1.219,18.369 c0.817,6.2,2.86,12.133,5.94,17.466l0.01,0.02c3.078,5.325,
                            7.189,10.054,12.146,13.858c4.776,3.666,10.338,6.474,16.516,8.129 c6.178,1.655,12.399,2.005,18.368,
                            1.219c6.2-0.817,12.132-2.86,17.466-5.94c5.334-3.079,10.07-7.195,13.878-12.156 c3.666-4.777,
                            6.474-10.34,8.128-16.517c1.103-4.115,1.627-8.247,1.621-12.309c-0.005-4.191-0.574-8.315-1.653-12.274 
                            c-0.052-0.19,0.05-0.385,0.229-0.456l3.29-1.458c0.193-0.085,0.419,0.003,0.503,0.195c0.01,0.022,0.018,
                            0.044,0.022,0.066 c1.244,4.389,1.913,8.974,1.944,13.646c0.03,4.527-0.54,9.131-1.767,13.71c-1.808,
                            6.745-4.873,12.818-8.876,18.034 c-4.158,5.419-9.328,9.912-15.149,13.274l-0.021,0.012c-5.817,
                            3.354-12.286,5.581-19.049,6.471 c-6.52,0.859-13.312,0.478-20.055-1.329c-6.744-1.807-12.816
                            -4.872-18.033-8.875c-5.417-4.158-9.911-9.328-13.273-15.15h0 C3.561,71.533,1.33,65.057,0.438,
                            58.284c-0.858-6.52-0.477-13.312,1.33-20.055c1.807-6.745,4.873-12.818,8.875-18.034 c4.158-5.419,
                            9.328-9.913,15.149-13.274C31.615,3.56,38.091,1.33,44.863,0.438C51.383-0.42,58.176-0.039,64.92,
                            1.768L64.92,1.768z M55.828,36.375c0.657,0.184,1.295,0.407,1.912,0.668c0.634,0.268,1.244,0.574,1.826,
                            0.915c0.181,0.106,0.242,0.339,0.136,0.521 c-0.026,0.045-0.06,0.082-0.099,0.111l0,0.001l-3.167,
                            2.395c-0.118,0.089-0.271,0.099-0.396,0.039 c-0.223-0.095-0.449-0.182-0.674-0.261c-0.226-0.08-0.461
                            -0.153-0.704-0.222l-0.111-0.025l-0.014-0.004v0 c-1.499-0.401-3.008-0.486-4.454-0.296c-1.503,
                            0.198-2.941,0.694-4.234,1.44c-1.293,0.747-2.442,1.745-3.365,2.948 c-0.889,1.158-1.57,2.507-1.972,
                            4.005c-0.401,1.499-0.486,3.008-0.296,4.455c0.198,1.503,0.693,2.941,1.44,4.235 c0.747,1.293,1.745,
                            2.441,2.947,3.364c1.159,0.89,2.508,1.57,4.005,1.972c0.019,0.005,0.039,0.012,0.056,0.02 c1.479,0.388,
                            2.968,0.467,4.396,0.278c1.503-0.199,2.942-0.695,4.236-1.442c1.296-0.748,2.445-1.747,3.368-2.947l-0.001-0.001 
                            c0.89-1.157,1.57-2.504,1.973-3.999l0,0l0.066-0.263c0.031-0.121,0.117-0.215,0.226-0.259l3.857-1.709 c0.193-0.085,
                            0.418,0.003,0.504,0.195c0.026,0.061,0.036,0.125,0.03,0.187c-0.035,0.492-0.096,0.988-0.179,
                            1.485 c-0.084,0.493-0.19,0.985-0.321,1.474l-0.001,0.002h0.001l-0.003,0.01l-0.005,0.017c-0.554,2.057-1.49,
                            3.91-2.712,5.502 c-1.272,1.659-2.854,3.034-4.634,4.063l-0.021,0.012c-1.776,1.021-3.75,1.699-5.814,
                            1.971c-1.979,0.26-4.04,0.147-6.085-0.393 c-0.02-0.002-0.04-0.006-0.059-0.011h-0.001h0c-2.064-0.553-3.924-1.492-5.521-2.718c
                            -1.659-1.273-3.036-2.856-4.065-4.641 c-1.029-1.783-1.713-3.767-1.985-5.839c-0.263-1.998-0.147-4.078,
                            0.406-6.142c0.553-2.064,1.492-3.924,2.718-5.521 c1.273-1.66,2.857-3.036,4.64-4.065l0.021-0.012c1.777-1.022,
                            3.753-1.701,5.819-1.973c1.997-0.263,4.077-0.147,6.14,0.406 l0.017,0.005c0.026,0.007,0.05,0.014,0.07,
                            0.021C55.775,36.356,55.803,36.365,55.828,36.375L55.828,36.375z M60.345,18.837 c2.712,0.727,5.26,1.763,
                            7.614,3.061c2.427,1.338,4.647,2.954,6.633,4.794c0.154,0.144,0.163,0.385,0.02,0.539 c-0.016,0.016-0.031,
                            0.031-0.049,0.044l0,0l-2.902,2.195c-0.155,0.117-0.37,0.098-0.502-0.037c-1.681-1.49-3.547-2.799-5.574-3.889 
                            c-1.975-1.061-4.102-1.913-6.361-2.518c-3.867-1.036-7.761-1.255-11.497-0.763c-3.879,0.511-7.591,1.789-10.929,
                            3.716l-0.02,0.01 c-3.329,1.925-6.285,4.497-8.665,7.597c-2.294,2.989-4.051,6.471-5.086,10.337c-1.036,3.867-1.255,
                            7.76-0.764,11.495 c0.511,3.881,1.79,7.594,3.716,10.931h0c1.927,3.337,4.502,6.301,7.607,8.683c2.99,2.295,6.471,
                            4.052,10.337,5.088 c3.866,1.037,7.76,1.256,11.494,0.764c3.881-0.512,7.594-1.79,10.932-3.717h-0.001c3.338-1.928,
                            6.302-4.503,8.685-7.607 c2.293-2.989,4.051-6.47,5.086-10.336c0.569-2.123,0.892-4.251,0.985-6.354c0.097
                            -2.165-0.049-4.308-0.416-6.397 c-0.031-0.181,0.07-0.354,0.233-0.42l3.347-1.483c0.192-0.085,0.418,0.003,
                            0.503,0.195c0.016,0.035,0.024,0.07,0.029,0.105 c0.51,2.518,0.737,5.113,0.654,7.741c-0.08,2.563-0.454,
                            5.156-1.145,7.735c-1.188,4.433-3.203,8.424-5.834,11.853 c-2.732,3.56-6.131,6.514-9.959,8.724l0.001,
                            0.001c-3.827,2.209-8.085,3.676-12.536,4.262c-4.286,0.564-8.75,0.314-13.181-0.873 c-4.433-1.188-8.424
                            -3.204-11.854-5.835c-3.561-2.733-6.515-6.131-8.724-9.957l-0.012-0.022c-2.203-3.821-3.665-8.071-4.25-12.514 
                            c-0.564-4.286-0.314-8.75,0.874-13.182c1.188-4.432,3.202-8.424,5.834-11.853c2.733-3.562,6.131-6.516,
                            9.958-8.725l0.021-0.012 c3.822-2.203,8.071-3.665,12.513-4.249C51.449,17.399,55.914,17.65,60.345,
                            18.837L60.345,18.837z M108.899,16.93l1.137-5.766 l-13.832,7.986l-2.525,7.875l8.477,2.311l13.861-8.003l-5.808-2.093c-0.47
                            -0.168-0.849-0.5-1.083-0.914 C108.893,17.917,108.801,17.426,108.899,16.93L108.899,16.93z"/>
                        </g>
                    </svg>
                  </Box>
                </Grid>
                <Grid item xs={10} className='col-heading'>
                  <Typography className='heading'>
                    Our <span className='highlight'>Objective</span>
                  </Typography>
                </Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={10}>
                  <Typography className='text' sx={{ pr: 8 }}>
                    Through artificial intelligence, we are creating a future where people who are struggling with their mental health 
                    can easily access care & treatment. 
                    <br/>
                    <br/>
                    Two major things that are critical to us is the conversational aspect of the product and the tailoring algorithm. 
                  </Typography>
                  <Box className='sub-sections'>
                    <Box className='sub-section'>
                      <Box className='count'>
                        <Typography className='label'>01</Typography>
                      </Box>
                      <Box className='wrapper'>
                        <Typography className='sub-heading'>
                          conversational aspect
                        </Typography>
                        <Typography className='text'>
                          The conversational aspect will require our team of psychologist & 
                          writers to develop a conversational interface that feels natural and personal
                        </Typography>
                      </Box>
                    </Box>
                    <Box className='sub-section'>
                      <Box className='count'>
                        <Typography className='label'>02</Typography>
                      </Box>
                      <Box className='wrapper'>
                        <Typography className='sub-heading'>
                        tailoring algorithm
                        </Typography>
                        <Typography className='text'>
                          the tailoring algorithm allows us to draw from several therapeutic frameworks to find the 
                          right approach for the right person at the right time.
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>

              </Grid>
            </Grid>

            <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img
                src='/img/about/objective/ai_conversation.png'
                style={{
                  width: '80%'
                }}
              />
            </Grid>

          </Grid>
        </Box>
      </ObjectiveBox>
      


      <ConclusionBox sx={{ mt: 12 }}>
        <Container>
          <Typography className='heading'>
            What makes us <span className='highlight'>different?</span>
          </Typography>
        </Container>
        <Container>
          <Typography className='text' sx={{ px: 32, py: 4 }}>
            Our approach in delivering care & empathy differentiates us from others. 
            We find it critical to bring together in one space Therapeutic tools & 
            value added service that will support the well-being of our users and motivate their healing process. 
            This will give them the opportunity to shop, stream movies (clinically selected for cinema therapy) and 
            enjoy bed time stories from their Favourite celebrities. 
            This is beyond a therapy session but a support system that understands what it means to heal properly. 
          </Typography>
        </Container>

        <Container>
          <Typography className='sub-heading' sx={{ pb: 4 }}>
            Here is what HOG can do!
          </Typography> 
          <Box
            sx={{
              width: 200,
              height: 200,
              backgroundImage: `radial-gradient(${alpha('#fff', 0)}, #fff 70%), 
              url(/img/about/conclusion/w0116e16207253415031.jpg)`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              position: 'relative',
              margin: '250px auto'
            }}
          >
            <Box className='floatPointBox' sx={{ top: '-75%', left: '50%' }}>
              <Box className='wrapper'>
                <ConclusionImg
                  src="\img\about\conclusion\AR_track_Isometric.png"
                  sx={{ width: .8, pb: .5 }}
                />
                <Typography className='text'>
                  Track your mood
                </Typography>
                <Typography className='count' sx={{ top: '-10%' }}>01</Typography>
                <Box className='badge' sx={{ top: '50%!important' }}>
                  <CheckSharpIcon className='icon'/>
                </Box>
              </Box>
            </Box>
            <Box className='floatPointBox' sx={{top: '-30%',left: '-30%' }}>
              <Box className='wrapper'>
                <ConclusionImg
                  src="\img\about\conclusion\Book_Lover_Monochromatic.png"
                  sx={{ pb: 0 }}
                />
                <Typography className='text'>
                  Know more stuff
                </Typography>
                <Typography className='count' sx={{ top: '0%', left: '0%' }}>02</Typography>
                <Box className='badge'>
                  <CheckSharpIcon className='icon'/>
                </Box>
              </Box>
            </Box>
            <Box className='floatPointBox' sx={{ top: '50%', left: '-84%' }}>
              <Box className='wrapper'>
                <ConclusionImg
                  src="\img\about\conclusion\Brainstorming__Two_Color.png"
                  sx={{ width: .85, pb: 0 }}
                />
                <Typography className='text'>
                  Give you insight
                </Typography>
                <Typography className='count' sx={{ top: '40%', left: '-22%' }}>03</Typography>
                <Box className='badge' sx={{ top: '60%!important', left: '70%!important' }}>
                  <CheckSharpIcon className='icon'/>
                </Box>
              </Box>
            </Box>
            <Box className='floatPointBox' sx={{ top: '130%', left: '-40%' }}>
              <Box className='wrapper'>
                <ConclusionImg
                  src="\img\about\conclusion\Waiting_Monochromatic.png"
                  sx={{ width: .6, pb: 2.25 }}
                />
                <Typography className='text'>
                  Be there 247
                </Typography>
                <Typography className='count' sx={{ top: '80%', left: '-15%' }}>04</Typography>
                <Box className='badge' sx={{ top: '56%', left: '65%' }}>
                  <CheckSharpIcon className='icon'/>
                </Box>
              </Box>
            </Box>
            <Box className='floatPointBox' sx={{ top: '165%', left: '48%' }}>
              <Box className='wrapper'>
                <ConclusionImg
                  src="\img\about\conclusion\Happy_face_Outline.png"
                  sx={{ width: .9 }}
                />
                <Typography className='text' sx={{ mt: '-36px!important' }}>
                  Help you feel better
                </Typography>
                <Typography className='count' sx={{ bottom: '-25%' }}>05</Typography>
                <Box className='badge' sx={{ top: '56%!important', left: '56%!important' }}>
                  <CheckSharpIcon className='icon'/>
                </Box>
              </Box>
            </Box>
            <Box className='floatPointBox' sx={{ top: '133%', left: '131%' }}>
              <Box className='wrapper'>
                <ConclusionImg
                  src="\img\about\conclusion\Brainstorming_session__Monochromatic.png"
                />
                <Typography className='text' sx={{ mt: '-8px!important' }}>
                  Learn from you overtime
                </Typography>
                <Typography className='count' sx={{ bottom: '-10%', right: '-20%' }}>06</Typography>
                <Box className='badge' sx={{ bottom: '55%!important', right: '70%!important' }}>
                  <CheckSharpIcon className='icon'/>
                </Box>
              </Box>
            </Box>
            <Box className='floatPointBox' sx={{ top: '50%', left: '180%' }}>
              <Box className='wrapper'>
                <ConclusionImg
                  src="\img\about\conclusion\Doctor_Two_Color.png"
                  sx={{ width: .8 }}
                />
                <Typography className='text'>
                  Connect you with the best Therapist care giver. 
                </Typography>
                <Typography className='count' sx={{ top: '40%', right: '-15%' }}>07</Typography>
                <Box className='badge' sx={{ top: '40%!important', left: '70%!important' }}>
                  <CheckSharpIcon className='icon'/>
                </Box>
              </Box>
            </Box>
            <Box className='floatPointBox' sx={{ top: '-35%', left: '135%' }}>
              <Box className='wrapper'>
                <ConclusionImg
                  src="\img\about\conclusion\Online_shopping__Monochromatic.png"
                  sx={{ width: .6, pb: 2.25 }}
                />
                <Typography className='text'>
                  Shop for you
                </Typography>
                <Typography className='count' sx={{ top: '0%', right: '0%' }}>08</Typography>
                <Box className='badge' sx={{ top: '60%!important', left: '70%!important' }}>
                  <CheckSharpIcon className='icon'/>
                </Box>
              </Box>
            </Box>

                  
            <RingMotif
              className='bgMotif'
              sx={{
                top: -550,
                right: -850
              }}
            ></RingMotif>  
            <RingMotif
              className='bgMotif'
              sx={{
                bottom: -550,
                left: -870
              }}
            ></RingMotif>
          </Box>
        </Container>

      </ConclusionBox>

    </Fragment>
  )
}