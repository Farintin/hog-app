import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'





const Page = styled(Box)(({ theme }) => ({
  //backgroundColor: theme.palette.background.default,
  width: '100%',
  minHeight: '100%'
}))



export default function ({ children }) {
  return (
    <Page>
      {children}
    </Page>
  )
}