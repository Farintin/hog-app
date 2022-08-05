import { Fragment } from 'react'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, Typography } from '@mui/material'
import { Home, Business, Reviews, Call, LiveHelp, Work, Info } from '@mui/icons-material'
import { styled } from '@mui/material/styles'





const menuData = [
    {
        icon: <Home/>, 
        label: 'Home'
    },
    {
        icon: <Info/>, 
        label: 'About'
    },
    {
        icon: <Reviews/>, 
        label: 'Reviews'
    },
    {
        icon: <Business/>, 
        label: 'Business'
    },
    {
        icon: <LiveHelp/>, 
        label: 'FAQ'
    },
    {
        icon: <Call/>, 
        label: 'Contact'
    }
]

const StyledList = styled(List)(({ theme }) => ({
  color: theme.palette.primary.main,
}))
const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  color: 'inherit',
  borderRadius: 8,
  '&:hover': {
    color: theme.palette.secondary.dark,
    backgroundColor: theme.palette.secondary.lighter
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
                            <StyledListItemButton>
                                <StyledListItemIcon>
                                {item.icon}
                                </StyledListItemIcon>
                                <Typography  
                                    sx={{
                                        fontWeight: 500,
                                        fontSize: 16,
                                        letterSpacing: .6
                                    }}
                                >
                                    {item.label}
                                </Typography>
                            </StyledListItemButton>
                        </ListItem>
                    </Fragment>
                )
            })}
        </StyledList>
    )
}