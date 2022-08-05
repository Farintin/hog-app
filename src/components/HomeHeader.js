import { AppBar, Toolbar, IconButton, Avatar, Badge } from '@mui/material'
import { Menu } from '@mui/icons-material'
import { styled, alpha } from '@mui/material/styles'





const StyledAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: alpha('#000', 0)
}))

const MenuButton = styled(IconButton)(({ theme }) => ({
    padding: 10, 
    backgroundColor: alpha('#000', .05),
    '&:hover': {
        backgroundColor: alpha(theme.palette.primary.light, .05)
    }
}))
const MenuIcon = styled(Menu)(({ theme }) => ({
    fontSize: 26
}))
const StyledAvatar = styled(Avatar)(({ theme }) => ({
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#fff'
}))
const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.light,
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
    return (
        <StyledAppBar position="static" sx={{ boxShadow: 0 }}>
            <Toolbar sx={{ justifyContent: 'space-between'}}>
                <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    variant="dot"
                >
                    <StyledAvatar alt="Remy Sharp" src="avatar.jpg" />
                </StyledBadge>

                <MenuButton
                    size="small"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={toggleHandler(anchor, true)}
                >
                    <MenuIcon />
                </MenuButton>
            </Toolbar>
        </StyledAppBar>
    )
}