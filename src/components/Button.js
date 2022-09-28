import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'





const StyledButton = styled(Button)(({theme}) => ({
    backgroundColor: '#fff',
    color: theme.palette.primary.darker,
    borderRadius: 16,
    padding: '12px 36px', 
    fontWeight: 700,
    fontSize: 16,
    textTransform: 'capitalize',
    width: 'fit-content',
    '&:hover': {
      backgroundColor: theme.palette.primary.darker,
      color: '#fff'
    }
}))
const WhiteContrastButton = styled(StyledButton)(({theme}) => ({
    backgroundColor: theme.palette.primary.dark,
    color: '#fff',
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark
    }
}))





export { StyledButton, WhiteContrastButton }