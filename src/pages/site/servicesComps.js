import { Container } from '@mui/material'
import { alpha, styled } from '@mui/material/styles'






const Heading = styled(Container)(({theme}) => ({
  textAlign: 'center',
  '& .heading': {
    textTransform: 'uppercase',
    fontWeight: 900,
    lineHeight: .75,
    fontStyle: 'italic',
    '&.bg': {
      fontSize: '600%',
      color: '#c2ade0'
    },
    '&.fg': {
      fontSize: '300%',
      color: theme.palette.text.darker,
      marginTop: -54
    },
    '& .squeeze': {
      letterSpacing: -4
    },
    '& .highlight': {
      color: theme.palette.secondary.main,
      fontSize: '150%',
      lineHeight: .1
    }
  }
}))



const Services = styled(Container)(({theme}) => ({
  '& .service': {
    height: '720px',
    display: 'flex',
    justifyContent: 'space-between',
    '&:nth-child(odd)': {
      '& .col-image': {
        '& .bgMotif': {
          left: -295
        }
      },
      '& .col-info': {
        paddingRight: 48
      },
    },
    '&:nth-child(even)': {
      flexDirection: 'row-reverse',
      '& .col-image': {
        '& .bgMotif': {
          right: -295
        }
      },
      '& .col-info': {
        paddingTop: 128,
        paddingRight: 96
      }
    },
    '& .col-image': {
      width: '110%',
      position: 'relative',
      '& img': {
        width: '100%',
        height: '100%',
        borderRadius: 32,
        //boxShadow: '0 0px 64px -48px black'
      }
    },
    '& .col-info': {
      width: 'fit-content',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '48px 0',
      '& .col-icon': {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        '& .iconBox': {
          borderRadius: '50%',
          width: 54,
          height: 54,
          backgroundColor: theme.palette.primary.dark,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          '& .icon': {
            width: 32,
            stroke: '#fff',
            fill: '#fff'
          }
        }
      },
      '& .col-heading': {
        display: 'flex',
        alignItems: 'center',
        '& .heading': {
          fontSize: '180%',
          color: theme.palette.text.darker,
          lineHeight: .75,
          fontWeight: 700,
          textTransform: 'capitalize'
        }
      },
      '& .col-text': {
        '& > *': {
          margin: '18px 0'
        },
        '& .text': {
          fontSize: '90%',
          color: '#433a4b',
          lineHeight: 1.65,
          fontWeight: 300
        }
      }
    }
  }
}))


const AppShowcase = styled(Container)(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  '& .wrapper': {
    borderRadius: 64,
    backgroundColor: alpha(theme.palette.primary.dark, 1),
    '& .col-text': {
      width: '40%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: 32,
      textAlign: 'center',
      '& > *': {
        margin: '12px 0'
      },
      '& .heading': {
        fontSize: '180%',
        color: '#fff',
        lineHeight: .75,
        fontWeight: 700
      },
      '& .text': {
        fontSize: '72%',
        color: '#fff',
        lineHeight: 1.65,
        fontWeight: 300
      },
      '& .getApp': {
        '& .sub-heading': {
          fontSize: '78%',
          fontWeight: 500,
          color: '#fff',
        },
        '& .links': {
          display: 'flex',
          '& .link': {
            borderRadius: 8,
            margin: '0px 8px',
            display: 'flex',
            width: 100,
            '& img': {
              width: '100%',
              borderRadius: 'inherit'
            }
          }
        }
      }
    },
    '& .col-image1': {
      width: '30%',
      '& img': {
        borderRadius: '64px 50% 50% 64px',
        objectPosition: 'right',
        position: 'relative',
        left: -1,
        height: 'calc(100% + 2px)',
        top: -1
      }
    },
    '& .col-image2': {
      width: '30%',
      '& img': {
        borderRadius: '50% 64px 64px 50%',
        position: 'relative',
        right: -1,
        height: 'calc(100% + 2px)',
        top: -1
      }
    }
  }
}))






export {
    Heading, 
    Services,
    AppShowcase
}