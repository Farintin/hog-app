import { createTheme } from '@mui/material/styles'



const theme = createTheme({
    palette: {
        primary: {
<<<<<<< HEAD
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
=======
            main: '#00000000'
        },
        secondary: {
            main: '#5cb85c'
        },
        text: {
            primary: '#eeeeee'
>>>>>>> e25a6c8374dcf2388582ba72f88a3059f8483d2d
        }
    },
    shape: {
        borderRadius: 64
    }
})



export { theme }