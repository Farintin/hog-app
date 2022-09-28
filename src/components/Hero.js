import { useRef } from 'react'
import { Container, Box, Typography } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { alpha, styled } from '@mui/material/styles'





const Hero = styled(Box)(({theme}) => ({
    width: '100%',
    height: '100vh',
    /*backgroundImage: `linear-gradient(to right, ${alpha('#09c693', 1)} 15%, ${alpha('#000', 0)} 75%), 
        url(/hero-bg.jpg)`,*/
    /*backgroundImage: `radial-gradient(${alpha('#000', 0)} 40%, ${alpha('#4c2b84', .45)} 70%), 
        url(https://www.middleeastmedicalportal.com/wp-content/uploads/2020/08/6750-1200x620.jpg)`,*/
    //backgroundImage: `url(/hero-bg.jpg)`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    color: theme.palette.text.lighter,
    backgroundColor: '#fff',
    position: 'relative',
    '& > .bg': {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'right',
        //opacity: .3,
        position: 'relative',
        '& .title': {
            fontSize: '1000%',
            fontWeight: 700,
            //fontFamily: 'Product Sans!important',
            textTransform: 'capitalize',
            color: '#fff',//'#e9e9e9',
            lineHeight: 1,
            padding: '36px 28px',
            fontStyle: 'italic'
        }
    },
    '& > .wrapper': {
        width: '100%', 
        height: '100%', 
        position: 'absolute', 
        top: 0,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundColor: `${alpha('#4c2b84', .78)}`
    },
    '& .content': {
        padding: 16,
        margin: '0 64px',
        display: 'flex',
        flexDirection: 'column',
        '& > .wrapper': {
            '& > *': {
                margin: '24px 0'
            },
            '& .heading': {
                fontSize: '250%', 
                fontWeight: 800, 
                textTransform: 'capitalize', 
                lineHeight: '157%',
                color: '#fff',
                '& .highlight': {
                    color: '#fff',
                    fontWeight: 900,
                    fontSize: '180%',
                    fontStyle: 'italic',
                    marginLeft: '-2%'
                }
            },
        },
    },
    '& .scrollDownButton': {
        position: 'absolute',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        '&:hover': {
            '& .icon': {
                color: theme.palette.secondary.light,
                fontSize: '400%'
            }
        },
        '& > .wrapper': {
            width: 50,
            height: 50,
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            '& .icon': {
                position: 'absolute',
                fontSize: '300%'
            }
        }
    }
}))



  

export default function (props) {
    const hero = useRef(null)

    function heroScrollDown() {
        const header = document.getElementById('header')
        const scrollH = hero.current.offsetHeight - header.offsetHeight
        window.scrollTo(0, scrollH)
    }

    return (
        <Hero 
            ref={hero}
            className='hero'
            sx={{
                backgroundImage: `radial-gradient(${alpha('#000', 0)} 40%, ${alpha('#4c2b84', .45)} 70%), 
                    url(${props.image})`,
            }}
        >
            <Box className='bg'>
                <Typography className='title'>{props.pageName}</Typography>
            </Box>

            <Box className="wrapper">
                <Container 
                    sx={{
                        height: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: props.contentPosition ? props.contentPosition : 'flex-start'
                    }}
                >
                    <Box
                        className='content' 
                        sx={{
                            textAlign: props.contentTextAlign ? props.contentTextAlign : 'left',
                            alignContent: props.contentDirection ? props.contentDirection : 'flex-start'
                        }}
                    >
                        {props.children}
                    </Box>
                </Container>
            </Box>

            <Box className='scrollDownButton' onClick={heroScrollDown}>
                <Box className='wrapper'>
                    <KeyboardArrowDownIcon className='icon' />
                </Box>
            </Box>
        </Hero>
    )
}