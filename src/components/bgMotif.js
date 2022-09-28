import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'



const RingMotif = styled(Box)(({theme}) => ({
  width: 375,
  height: 375,
  borderRadius: '50%',
  borderWidth: 120,
  borderStyle: 'solid',
  borderColor: '#eeeeee', 
  position: 'absolute',
  zIndex: -1,
  boxSizing: 'content-box',
  '&.xl': {
    width: 540,
    height: 540
  },
  '&.lg': {
    width: 445,
    height: 445
  },
  '&.sm': {
    width: 315,
    height: 315
  },
  '&.colored': {
    borderColor: '#965bea'
  }
}))



export { RingMotif }