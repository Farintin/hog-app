import { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { List, ListItem, ListItemButton, ListItemIcon, Typography } from '@mui/material'
import { Home, Business, Reviews, Call, LiveHelp, Info } from '@mui/icons-material'
import { styled } from '@mui/material/styles'





const menuData = [
    {
        icon: <Home/>, 
        label: 'Home',
        href: ''
    },
    {
        icon: <Business/>, 
        label: 'Business',
        href: 'services'
    },
    {
        icon: <Info/>, 
        label: 'About',
        href: 'about'
    },
    /*{
        icon: <LiveHelp/>, 
        label: 'FAQ',
        href: ''
    },
    {
        icon: <Reviews/>, 
        label: 'Reviews',
        href: ''
    },*/
    {
        icon: <Call/>, 
        label: 'Contact',
        href: 'contact'
    }
]

const StyledList = styled(List)(({ theme }) => ({
  color: `${theme.palette.primary.lighter}!important`,
  '& .link': {
    width: '100%',
    color: `${theme.palette.primary.lighter}!important`,
    textDecoration: 'none'
  },
  '& .label': {
    fontWeight: 600,
    fontSize: 15,
    letterSpacing: .6,
  }
}))
const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  color: 'inherit',
  borderRadius: 8,
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
    color: '#fff',//theme.palette.secondary.dark
  }
}))
const StyledListItemIcon = styled(ListItemIcon)(({ theme }) => ({
  color: 'inherit'
}))



export default function() {
    return (
        <StyledList>
            {menuData.map((item, i) => {
                return (
                    <Fragment key={i}>
                        <ListItem sx={{ py: 1, px: 0 }}>
                            <NavLink 
                                className='link'
                                to={item.href}  
                            >
                                <StyledListItemButton>
                                    <StyledListItemIcon>{item.icon}</StyledListItemIcon>
                                    <Typography className='label' sx={{ ml: '5%' }}>
                                        {item.label}
                                    </Typography>
                                </StyledListItemButton>
                            </NavLink>
                        </ListItem>
                    </Fragment>
                )
            })}
        </StyledList>
    )
}