import { Container, Grid } from '@mui/material'
import { alpha, styled } from '@mui/material/styles'






const Contact = styled(Container)(({theme}) => ({
  '& > .wrapper': {
    padding: '128px 64px',
    '& .heading': {
      fontSize: '330%',
      fontWeight: 800,
      color: theme.palette.text.darker,
      lineHeight: 1.3,
      letterSpacing: -1
    },
    '& .main': {
      '& .text': {
        fontSize: '90%',
        fontWeight: 500,
        color: '#222',
        lineHeight: 1.8,
        '& .highlight': {
          fontSize: '96%',
          fontWeight: 400,
          color: theme.palette.primary.dark
        }
      },
      '& .col': {
        '& > .wrapper': {
          padding: '0 32px'
        },
        '&.col-1': {
          paddingRight: 64,
          '& > .wrapper': {
            '& > *': {
              margin: '18px 0'
            },
            '& .heading': {
              fontSize: '180%',
              fontWeight: 600,
              lineHeight: 1.3,
              letterSpacing: 0
            },
            '& .row': {
              margin: '54px 0',
              '& > *': {
                margin: '12px 0'
              },
              '& .heading': {
                fontSize: '96%',
                fontWeight: 700,
                textTransform: 'capitalize'
              },
              '& .text': {
                lineHeight: 1.2
              }
            }
          }
        },
        '&.col-2': {
        }
      }
    }
  }
}))

const Form = styled(Grid)(({theme}) => ({
  position: 'relative',        
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#fff',
  borderRadius: 16,
  boxShadow: `0 0 32px -12px ${alpha('#000', .25)}`,
  padding: 27,
  '& .MuiGrid-item': {
    padding: '12px 8px',
    '& label': {
      color: '#777',
      fontSize: '81%',
      fontWeight: 500
    },
    '& .MuiTextField-root': {
      '& .MuiInputBase-root': {
        borderRadius: 12,
        fontSize: '81%',
        fontWeight: 600,
        color: alpha('#000', .84),
        '& .MuiSvgIcon-root': {
          fontSize: 20,
          color: alpha('#000', .84)
        },
        '& .MuiInputBase-input': {
          '&::placeholder': {
            color: '#000',
            fontWeight: 500,
            fontSize: '100%',
          },
          '&:focus ~ fieldset': {
            borderColor: theme.palette.primary.light,
            boxShadow: `0 16px 32px -12px ${alpha('#000', .25)}`,
          }
        },
        '& fieldset': {
          borderColor: alpha('#000', .1),
          borderWidth: 2
        }
      },
      '& .MuiInputBase-multiline': {
        display: 'flex',
        alignItems: 'baseline'
      }
    }
  },
  '& .submit': {
    borderRadius: 12,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 500,
    fontSize: 18,
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.secondary.main
    }
  },
  '& .bgMotif': {
    width: '360px!important',
    height: '360px!important',
    boxSizing: 'border-box',
    borderWidth: 108
  }
}))







export {
    Contact,
    Form
}