import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'





const ChatBotButton = styled(Button)(({theme}) => ({
  position: 'fixed',
  bottom: '3%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 14,
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.main,
  color: '#fff',
  minWidth: 'auto',
  '& .icon': {
    fontSize: 30
  },
  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
    //color: theme.palette.primary.main,
  }
}))



export { ChatBotButton }