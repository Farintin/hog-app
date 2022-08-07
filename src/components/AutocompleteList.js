<<<<<<< HEAD
import { useContext, Fragment } from 'react'
import { List, ListItemIcon, ListItemText, ListItemButton, Typography, Box } from '@mui/material';
import { styled, alpha } from '@mui/material/styles'
import SearchIcon from '@mui/icons-material/Search'

import style from './Autocomplete.module.css'

import { AutocompleteContext } from './Autocomplete'





const activeColor = alpha('#000', .1)
const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
    padding: 0,
    alignItems: 'flex-start',
    '&:hover': {
      backgroundColor: activeColor
    },
    '&.active': {
      backgroundColor: activeColor,
      '& .indicator': {
        backgroundColor: theme.palette.primary.main
      }
    }
}))
const ListTxt = styled(Box)(({ theme }) => ({
    paddingLeft: 4, 
    paddingRight: 64, 
    marginTop: 12, 
    marginBottom: 12
}))
const Indicator = styled(Box)(({ theme }) => ({
    width: 4,
    alignSelf: 'stretch',
    marginRight: 18,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8
}))


=======
import { List, ListItemIcon, ListItemText, ListItemButton } from '@mui/material';
import { alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

import style from './AutocompleteSearchBar.module.css';
>>>>>>> e25a6c8374dcf2388582ba72f88a3059f8483d2d



export default function(props) {
<<<<<<< HEAD
  const suggestion = props.suggestion
  const [activeSuggestIndex, setActiveSuggestIndex] = useContext(AutocompleteContext).useSuggestIndexState



  return (
    <List dense={true} className={style.suggestion} sx={{ mb: 2, pb: 3 }}>
      {suggestion.map((item, index) => {
        const value = item.label

        return (
          <StyledListItemButton 
            className={index === activeSuggestIndex ? 'active' : ''} 
            key={index} onClick={() => props.onClickHandler(value)} 
          >
            <Indicator className='indicator'></Indicator>
            <ListItemIcon sx={{ minWidth: 30, my: 1.5 }}>
              <SearchIcon sx={{ fontSize: 17, color: '#555'}} />
            </ListItemIcon>
            <ListTxt>
              <Typography 
                sx={{ 
                  fontSize: 14, 
                  fontWeight: 500, 
                  color: '#000', 
                  lineHeight: 1.3
                }}
              >
                {value} {index === 0 ? <span style={{ color: '#777', fontWeight: 400 }}>- Hog Search</span> : ''}
              </Typography>
            </ListTxt>
          </StyledListItemButton>
=======
  return (
    <List dense={true} className={style.suggestion} sx={{ mb: 2 }}>
      {props.suggestion.map((item, index) => {
        const value = item.label;
        return (
          <ListItemButton key={index} onClick={() => props.onClickHandler(value)} sx={{ 
            px: 4, 
            borderStyle: 'solid', 
            borderColor: `${index === 0 ? '#4cae4c' : 'transparent'}`, 
            borderLeftWidth: 4, 
            backgroundColor: `${index === 0 ? alpha('#000', 0.05) : 'transparent'}`
          }}>
            <ListItemIcon sx={{ minWidth: 30 }}>
              <SearchIcon sx={{ fontSize: 16, color: '#000000'}} />
            </ListItemIcon>
            <ListItemText primary={value} secondary={null} />
          </ListItemButton>
>>>>>>> e25a6c8374dcf2388582ba72f88a3059f8483d2d
        )
      })}
    </List>
  )
}