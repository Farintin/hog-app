import { createTheme } from '@mui/material/styles'



const theme = createTheme({
    palette: {
        primary: {
            lighter: '#edfff5',
            light: '#a4ffd0',
            main: '#00a44e',
            dark: '#00803d',
            darker: '#005b2c'
        },
        secondary: {
            lighter: '#fffbed',
            light: '#ffeaa4',
            main: '#ffd95b',
            dark: '#ffc812',
            darker: '#c89900'
        },
        text: {
            primary: '#fff'
        }
    },
    shape: {
        borderRadius: 64
    }
})



export { theme }