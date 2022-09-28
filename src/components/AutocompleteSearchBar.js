import { useState, useRef, useEffect } from 'react';
import { Box, Container, Button, Stack, InputBase, TextField, Input } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import AutocompleteList from './AutocompleteList';
import EmojisData from '@emoji-mart/data';

import style from './AutocompleteSearchBar.module.css';





const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  width: 'auto',
  [theme.breakpoints.up('sm')]: {
    width: 'auto',
  }
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2, 0, 2.5),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
const MicIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2, 0, 2.5),
  height: '100%',
  position: 'absolute',
  right: 0,
  top: 0,
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(TextField)(({ theme }) => ({
  color: alpha('#ffffff', 0.8),
  '& .MuiInputBase-input': {
    '&:focus': {
      color: alpha('#3a3a3a', 1),
    },
    padding: theme.spacing(1.45),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4.5)})`,
    paddingRight: `calc(1em + ${theme.spacing(4.5)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '300px',
    },
    [theme.breakpoints.up('md')]: {
      width: '600px',
    },
  }
}));



const ButtonsContainer = styled(Container)(({ theme }) => ({
  display: 'flex', 
  justifyContent: 'center',
  padding: 16,
  marginTop: 24,
  [theme.breakpoints.down('md')]: {
    width: '100%',
    marginTop: 0,
    padding: 8
  },
}));

const StyledStack = styled(Stack)(({ theme }) => ({
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    width: '100%'
  }
}));

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: '16px!important',
  margin: '8px!important',
  textTransform: 'capitalize!important',
  fontWeight: '700!important',
  fontSize: '16px!important',
  backgroundColor: '#5cb85c!important',
  color: '#ffffff!important',
  border: '2px solid #379537!important',
  width: '180px!important',
  minWidth: '150px',
  height: '70px',
  flexDirection: 'column',
  '&:hover': {
    backgroundColor: '#4cae4c!important'
  },
  [theme.breakpoints.down('md')]: {
    width: '55%!important',
    height: '60px',
    fontSize: '13px!important',
    '& .text-secondary': {
      fontSize: '9px'
    }
  }
}));



export default function(props) {
    const searchData = props.searchData;
    const defaultSearchText = `${EmojisData.emojis.wave.skins[0].native} talk to me...`;
    const [searchText, setSearchText] = useState(defaultSearchText);
    const [suggest, setSuggest] = useState([]);
    const searchContainer = useRef(null);
    const searchBar = useRef(null);
  
    const focusHandler = (e) => {
      searchBar.current.classList.add(style.focused);
      searchBar.current.classList.remove(style.blurred);
      
      if (suggest.length === 0) {
        searchContainer.current.classList.add(style.hide);
        searchContainer.current.classList.remove(style.show)
      } else {
        searchContainer.current.classList.add(style.show);
        searchContainer.current.classList.remove(style.hide)
      };
  
      if (searchText === defaultSearchText) {
        setSearchText('')
      }
    };
    

    const blurHandler = (e) => {
      let searchVal = e.target.value;
      if (searchVal === "") {
        setSearchText(defaultSearchText)
      };
  
      searchContainer.current.classList.add(style.invisible);
      searchBar.current.classList.add(style.blurred);
      searchBar.current.classList.remove(style.focused);
      setTimeout(function() {
        searchContainer.current.classList.add(style.hide);
        searchContainer.current.classList.remove(style.show)
        searchContainer.current.classList.remove(style.invisible);
      }, 100)
    };
    const handleChange = (e) => {
      let searchVal = e.target.value;
      if (searchVal.length >= 3) {
        let suggestion = [];
        if (searchVal.length > 0) {
          suggestion = searchData.search(searchVal.toLowerCase())
        };
        setSuggest(suggestion);
      };
      setSearchText(searchVal)
    };
  
    useEffect(() => {
      if (suggest.length === 0) {
        searchContainer.current.classList.add(style.hide);
        searchContainer.current.classList.remove(style.show)
      } else {
        searchContainer.current.classList.add(style.show);
        searchContainer.current.classList.remove(style.hide)
      }
    }, [suggest]);
  
    function suggestedText(value) {
      console.log(value);
      setSearchText(value);
      setSuggest([])
    };
    const getSuggestions = () => {
      return <AutocompleteList suggestion={suggest} onClickHandler={suggestedText} />
    };
    

    return (
      <>
        <Box ref={searchContainer} sx={{ borderRadius: '32px' }}>
          <Search ref={searchBar} sx={{ border: '1px solid #fff', m: 1.5 }} className={style.blurred}>
              <SearchIconWrapper className={style.textSearch}>
                <SearchIcon sx={{ fontSize: 20, color: 'inherit' }} />
              </SearchIconWrapper>
              <StyledInputBase
                inputProps={{ 'aria-label': 'search' }}
                value={searchText}
                onChange={handleChange}
                onFocus={focusHandler}
                onBlur={blurHandler}
              />
              <MicIconWrapper className={style.voiceSearch}>
                <MicIcon sx={{ fontSize: 20, color: 'inherit' }} />
              </MicIconWrapper>
          </Search>
          {getSuggestions()}
        </Box>
        <ButtonsContainer>
          <StyledStack direction={{ xs: 'column', md: 'row' }}>
            <StyledButton variant="contained" className={style.button}>individual<p className={`${style.secondary} text-secondary`}>(For myself)</p></StyledButton>
            <StyledButton variant="contained" className={style.button}>couples<p className={`${style.secondary} text-secondary`}>(For me and my partner)</p></StyledButton>
            <StyledButton variant="contained" className={style.button}>teen<p className={`${style.secondary} text-secondary`}>(For my child)</p></StyledButton>
          </StyledStack>
        </ButtonsContainer>
      </>
    )
}