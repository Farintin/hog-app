import { createTheme } from '@mui/material/styles'



const theme = createTheme({
    palette: {
        primary: {
            lighter: '#edfff5',
            light: '#a4ffd0',//'#00c35e'
            main: '#00a44e',//'#00a54f'
            dark: '#00803d',//'#008741'
            darker: '#005b2c'
        },
        secondary: {
            lighter: '#fffbed',
            light: '#ffeaa4',
            main: '#ffd95b',//'#ffd23f'
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