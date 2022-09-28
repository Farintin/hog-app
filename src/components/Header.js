import { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { AppBar, Avatar, Badge, Box, Container, Typography } from '@mui/material'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { styled, alpha } from '@mui/material/styles'







const NavBar = styled(AppBar)(({theme}) => ({
    backgroundColor: alpha('#fff', 0),
    position: 'fixed',
    width: '100vw',
    left: 0,
    '&.below': {
        backgroundColor: '#6e47b0',//#4c2b84'
    }
}))
/*const MenuButton = styled(IconButton)(({theme}) => ({
    padding: 10, 
    backgroundColor: alpha('#000', .05),
    '&:hover': {
        backgroundColor: alpha(theme.palette.primary.light, .05)
    }
}))
const MenuIcon = styled(Menu)(({theme}) => ({
    fontSize: 26
}))*/
const BrandLogo = styled('img')(({theme}) => ({
    width: 42,
    [theme.breakpoints.down('md')]: {
      width: 80,
      marginBottom: 0
    },
    [theme.breakpoints.down('sm')]: {
      width: 70
    }
}))



const Nav = styled(Box)(({theme}) => ({
    display: 'flex',
    flexWrap: 'wrap',
}))
const StyledLink = styled(NavLink)(({theme}) => ({
    textDecoration: 'none',
    textTransform: 'capitalize',
    margin: '0 16px',
    fontWeight: 500,
    fontSize: '87%',
    color: '#fff',
    letterSpacing: .5,
    '&.active': {
        color: theme.palette.secondary.main
    },
    '&:hover': {
        color: theme.palette.secondary.main
    }
}))



const StyledNavButton = styled(NavLink)(({theme}) => ({
    textDecoration: 'none',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    '& .text': {
        fontWeight: 300,
        fontSize: '108%',
        fontStyle: 'italic',
        lineHeight: 1.3,
        '&:first-letter': {
            fontSize: '120%',
            fontWeight: 400,
            color: theme.palette.secondary.dark
        }
    },
    '&:hover': {
        color: theme.palette.secondary.dark,
        '& .text': {
            '&:first-letter': {
                color: '#fff'
            }
        },
    }
}))



const avatarSize = 45
const StyledAvatar = styled(Avatar)(({theme}) => ({
    width: avatarSize,
    height: avatarSize,
    borderWidth: 3.5,
    borderStyle: 'solid',
    borderColor: theme.palette.text.light,
    cursor: 'pointer'
}))
const StyledBadge = styled(Badge)(({theme}) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#169d78',
      color: '#fff',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
}))








export default function({ toggleHandler, anchor}) {
    const navbar = useRef(null)

    let active = ({ isActive }) => {
        return isActive ? 'active' : ''
    }

    window.onscroll = function() {onScroll()}
    function onScroll() {
        const navH = navbar.current.offsetHeight
        if (document.body.scrollTop > navH || document.documentElement.scrollTop > navH) {
            navbar.current.classList.add('below')
        } else {
            navbar.current.classList.remove('below')
        }
    }

    return (
        <NavBar ref={navbar} id='header' sx={{ boxShadow: 0, py: 2.25 }}>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                    <BrandLogo src="/logo/hog_logo_gold_titleless_w-50.png" />
                    <Typography 
                        sx={{ 
                            fontSize: '130%', 
                            fontWeight: 700, 
                            fontFamily: 'Product Sans!important', 
                            color: '#fff',//#656565',//'#f8e9c4', 
                            lineHeight: '85%',
                            letterSpacing: -3,
                            ml: -.5
                        }}
                    >
                        H<span style={{ fontSize: '130%', color: '#ead298' }}>O</span>G
                    </Typography>
                </a>
                
                <Box sx={{ display: 'flex', alignItems: 'center' }}>                    
                    <Nav sx={{ my: 1.5, mx: 8 }}>
                        <StyledLink to="" underline="none">home</StyledLink>
                        <StyledLink to="services" underline="none">business</StyledLink>
                        <StyledLink to="about" underline="none">insight</StyledLink>
                        <StyledLink to="contact" underline="none">reach out</StyledLink>
                    </Nav>

                    <StyledNavButton to='#' sx={{ mx: 4 }}>
                        <Typography className='text'>Get started</Typography>
                        <ChevronRightIcon sx={{ fontSize: '150%', ml: -.7, mt: 0 }} />
                    </StyledNavButton>

                    <StyledBadge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant="dot"
                    >
                        <StyledAvatar alt="Remy Sharp" src="/avatar.jpg" />
                    </StyledBadge>
                </Box>
            </Container>
        </NavBar>
    )
}