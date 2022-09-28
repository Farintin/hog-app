import { Box, AppBar, Toolbar, IconButton, Avatar, Badge, Typography } from '@mui/material'
import { Menu } from '@mui/icons-material'
import { styled, alpha } from '@mui/material/styles'





const StyledAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: alpha('#000', 0),
    color: '#fff'
}))

const MenuButton = styled(IconButton)(({ theme }) => ({
    padding: 10, 
    backgroundColor: alpha('#000', 0),
    '&:hover': {
        backgroundColor: alpha(theme.palette.primary.light, 0)
    }
}))
const MenuIcon = styled(Menu)(({ theme }) => ({
    fontSize: 26
}))

const StyledAvatar = styled(Avatar)(({ theme }) => ({
    borderWidth: 0,
    borderStyle: 'solid',
    borderColor: '#fff',
    cursor: 'pointer'
}))
const StyledBadge = styled(Badge)(({ theme }) => ({
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

const BrandText = styled(Typography)(({ theme }) => ({
    color: '#fff', 
    fontWeight: 700, 
    fontFamily: 'Product Sans!important', 
    letterSpacing: 3,
    fontStyle: 'italic',
    fontSize: 24,
    [theme.breakpoints.up('sm')]: {
    },
    [theme.breakpoints.down('md')]: {
    },
    display: 'none'
}))




export default function({ toggleHandler, anchor}) {
    return (
        <StyledAppBar position="static" sx={{ boxShadow: 0 }}>
            <Toolbar sx={{ justifyContent: 'space-between'}}>
                <Box>
                    <BrandText variant="h1">
                        HOG
                    </BrandText>
                </Box>
                <Box>
                    <MenuButton
                        size="small"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleHandler(anchor, true)}
                    >
                        <svg viewBox="0 0 24 24" style={{ width: 32, fill: '#fff' }}>
                            <path 
                                d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,
                                    2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,
                                    2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,
                                    2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,
                                    2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,
                                    2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,
                                    2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,
                                    2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,
                                    2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"
                            >
                            </path>
                        </svg>
                    </MenuButton>
                    <StyledBadge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant="dot"
                        sx={{ ml: 1 }}
                    >
                        <StyledAvatar alt="Remy Sharp" src="avatar.jpg" />
                    </StyledBadge>
                </Box>
            </Toolbar>
        </StyledAppBar>
    )
}