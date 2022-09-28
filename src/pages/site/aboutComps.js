import { Container } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Img } from '../../components/Img'






const AboutBox = styled(Container)(({ theme }) => ({
  '& .heading-bg': {
    fontSize: '600%',
    fontWeight: 900, 
    lineHeight: .75,
    fontStyle: 'italic',
    color: '#c2ade0',
    '& .squeeze': {
      letterSpacing: -4
    }
  },
  '& .heading-fg': {
    fontSize: '330%',
    fontWeight: 900, 
    lineHeight: .75,
    fontStyle: 'italic',
    color: theme.palette.text.darker,
    marginTop: -8,
    '& .squeeze': {
      letterSpacing: -4
    }
  },
  '& .text': {
    fontWeight: 500,
    lineHeight: 1.8,
    color: '#404040'
  }
}))

const ResearchBox = styled(AboutBox)(({ theme }) => ({
  position: 'relative',
  '.text': {
    textAlign: 'justify',
    '& .highlight': {
      fontSize: '120%',
      fontWeight: 800,
      color: theme.palette.primary.main,
      lineHeight: 0 
    },
    '&:first-letter': {
      fontSize: '450%',
      fontWeight: 600,
      lineHeight: .82,
      float: 'left',
      margin: '-2px 10px 0px 0px'
    }
  }
}))

const MissionBox = styled(AboutBox)(({ theme }) => ({
  /*'& .heading-sign': { 
    width: '10%', 
    height: 4, 
    backgroundColor: theme.palette.primary.main, 
    margin: '0 0 1px 0%', 
    borderRadius: 4
  },*/
  '& .col-icon': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& .iconBox': {
      borderRadius: '50%',
      width: 54,
      height: 54,
      backgroundColor: theme.palette.primary.main,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '& .icon': {
        width: 28,
        stroke: '#fff',
        strokeWidth: 3,
        fill: '#fff'
      }
    }
  },
  '& .col-heading': {
    display: 'flex',
    alignItems: 'center',
    '& .heading': {
      fontSize: '200%',
      fontWeight: 800,
      lineHeight: .75,
      color: theme.palette.text.darker,
      '& .highlight': {
        color: theme.palette.primary.main
      }
    }
  },
  '& .text': {
    fontSize: 15,
    color: '#2d2d26',
    lineHeight: 2
  },
}))

const ObjectiveBox = styled(MissionBox)(({ theme }) => ({
  '& > .wrapper': {
    padding: '64px 72px !important',
    backgroundColor: '#f6f6f6',
    borderRadius: 64,
    position: 'relative',
    '& .text': {
      fontWeight: 400,
      fontSize: 14,
      color: '#464133',
      lineHeight: 2
    },
    '& .sub-sections': {
      paddingTop: 16,
      '& .sub-section': {
        marginBottom: 16,
        '& > .wrapper': {
          padding: '32px 0px 0px 42px',
          marginTop: -64,
          '& .sub-heading': {
            fontWeight: 700,
            fontSize: 14,
            textTransform: 'uppercase',
            padding: '0px 0px 16px',
            color: theme.palette.primary.main,
            lineHeight: 1
          }
        },
        '& .count': {
          '& .label': {
            fontWeight: 700,
            fontSize: '400%',
            color: '#e4e3d7',
            lineHeight: 1
          },
        }
      },
    },
    '& .bgInternalMotif': {
      width: 200,
      height: 200,
      position: 'absolute',
      backgroundColor: theme.palette.primary.light
    }
  }
}))

const ConclusionBox = styled(MissionBox)(({ theme }) => ({
  padding: '96px 0',
  textAlign: 'center',
  '& .heading': {
    fontSize: '210%',
    fontWeight: 800, 
    lineHeight: .75,
    color: theme.palette.text.darker
  },
  '& .text': {
    fontWeight: 500,
    fontSize: '90%',
    lineHeight: 2,
    '&:first-letter': {
      fontSize: '240%',
      fontWeight: 600,
      lineHeight: 1,
      color: theme.palette.primary.dark
    }
  },
  '& .sub-heading': {
    fontWeight: 700,
    fontSize: '150%',
    color: theme.palette.text.darker,//'#ffd826'
  },
  '.floatPointBox': {
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    width: 180
  },
  '.floatPointBox .wrapper': {
    display: 'flex', 
    alignItems: 'center', 
    flexDirection: 'column',
    position: 'relative',
    width: '100%'
  },
  '& .floatPointBox .text': {
    fontWeight: 700,
    fontSize: '78%',
    color: theme.palette.text.dark,
    lineHeight: 1.5,
    marginTop: -16,
    padding: '0 36px'
  },
  '& .floatPointBox .count': {
    fontWeight: 700,
    fontSize: '400%',
    color: '#e0e0e0',
    lineHeight: 1,
    position: 'absolute',
    zIndex: -1
  },
  '& .floatPointBox .badge': {
    position: 'absolute',
    zIndex: 1,
    backgroundColor: theme.palette.secondary.main,
    width: 32,
    height: 32,
    borderRadius: '50%',
    top: '55%',
    left: '65%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& .icon': {
      color: '#fff',
      fontSize: 22
    }
  }
}))



const ResearchImg = styled(Img)(({ theme }) => ({
  boxShadow: '0 32px 64px -48px black'
}))
const ConclusionImg = styled(Img)(({ theme }) => ({
  width: '70%',
  borderRadius: 0
}))








export {
    AboutBox,
    ResearchBox,
    MissionBox,
    ObjectiveBox,
    ConclusionBox,
    ResearchImg,
    ConclusionImg
}