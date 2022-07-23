import { List, ListItemIcon, ListItemText, ListItemButton } from '@mui/material';
import { alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

import style from './AutocompleteSearchBar.module.css';



export default function(props) {
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
        )
      })}
    </List>
  )
}