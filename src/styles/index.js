import { createTheme } from '@mui/material/styles'



const theme = createTheme({
    palette: {
        primary: {
            main: '#00000000'
        },
        secondary: {
            main: '#5cb85c'
        },
        text: {
            primary: '#eeeeee'
        }
    },
    shape: {
        borderRadius: 64
    }
})



export { theme }