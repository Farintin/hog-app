import { styled } from '@mui/material/styles'



const Img = styled('img')(({theme}) => ({
  width: '100%', 
  height: '100%',
  borderRadius: '16px',
  objectFit: 'cover',
}))





export { Img }