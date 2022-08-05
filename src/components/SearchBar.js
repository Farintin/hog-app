import { useState, useRef, useContext } from 'react'
import { Box, InputBase } from '@mui/material'
import { styled, alpha } from '@mui/material/styles'
import SearchIcon from '@mui/icons-material/Search'
import MicIcon from '@mui/icons-material/Mic'
import { CloseRounded } from '@mui/icons-material'

import style from './SearchBar.module.css'
import autocompleteStyle from './Autocomplete.module.css'

import { AutocompleteContext } from './Autocomplete'
import { SearchContext } from './SearchSection'





const inputPx = 54
const inputH = 44
const SearchWrapper = styled(Box)(({ theme }) => ({
  width: 700,
  height: inputH,
  //borderRadius: theme.shape.borderRadius,
  position: 'relative',
  [theme.breakpoints.down('md')]: {
    width: '60vw'
  },
  [theme.breakpoints.down('sm')]: {
    width: '80vw'
  }
}))
const IconGrouper = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  zIndex: 1,
  display: 'flex'
}))
const IconWrapper = styled(Box)(({ theme }) => ({
  width: inputH,
  height: inputH,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '& .MuiSvgIcon-root': {
    fontSize: 22,
    color: '#fff'
  }
}))
const Input = styled(InputBase)(({ theme }) => ({
  width: '100%',
  height: '100%',
  '& .MuiInputBase-input': {
    width: '100%',
    height: '100%',
    backgroundColor: alpha('#000', .08),
    color: '#fff',
    padding: `0 ${inputPx}px`,
    borderRadius: theme.shape.borderRadius,
    border: '1px solid #fff',
    fontSize: 15,
    fontWeight: 400,
    '&:focus': {
      backgroundColor: alpha('#fff', 1),
      border: 'none',
      color: '#555',
      fontWeight: 400
    }
  }
}))





export default function SearchBar(props) {
  const searchTextState = useContext(SearchContext)
  const [suggest, setSuggest] = useContext(AutocompleteContext).useSuggestState
  const setSuggestedText = useContext(AutocompleteContext).setSuggestedText
  const autocompleteComponent = useContext(AutocompleteContext).component
  const [activeSuggestIndex, setActiveSuggestIndex] = useContext(AutocompleteContext).useSuggestIndexState
  const autocompleteData = props.autocompleteData ? props.autocompleteData : []
  const placeholder = props.placeholder ? props.placeholder : 'How are You'
  const [searchText, setSearchText] = searchTextState ? searchTextState : useState(placeholder)
  const searchWrapper = useRef(null)

  const focusHandler = (e) => {
      searchWrapper.current.classList.add(style.focused)
      
      if (searchText === placeholder) {
        setSearchText('')
      }
      setActiveSuggestIndex(0)
  }
  const blurHandler = (e) => {
      let searchVal = e.target.value
      if (searchVal === "") {
        setSearchText(placeholder)
      }

      autocompleteComponent.current.classList.add(autocompleteStyle.invisible)
      searchWrapper.current.classList.remove(style.focused)
      setTimeout(function() {
        if (autocompleteComponent.current) {
          autocompleteComponent.current.classList.remove(autocompleteStyle.show)
          autocompleteComponent.current.classList.remove(autocompleteStyle.invisible)
        }
      }, 200)
  }
  const handleChange = (e) => {
      let searchVal = e.target.value;
      
      if (searchVal.length >= 1) {// set minimum suggestion trigger letter length
        let suggestion = []
        suggestion = autocompleteData.search(searchVal.toLowerCase())
        suggestion = suggestion.map((item) => {
          return {label: item.label.toLowerCase()}
        })

        suggestion.unshift({label: searchVal.toLowerCase()})
        setSuggest(suggestion)

        searchWrapper.current.classList.add(style.showClearIcon)
      }
      if (searchVal === '') {
        searchWrapper.current.classList.remove(style.showClearIcon)
        setSuggest([])
      }
      setSearchText(searchVal)
      setActiveSuggestIndex(0)
  }
  const keyDownHandler = ({ key }) => {
    const nSuggest = suggest.length

    if (nSuggest > 1) {
      if (key === 'ArrowUp') {
        setActiveSuggestIndex(activeSuggestIndex - 1)
        if (activeSuggestIndex === 0) {
          setActiveSuggestIndex(nSuggest - 1)
        }
      } else if (key === 'ArrowDown') {
        setActiveSuggestIndex(activeSuggestIndex + 1)
        if (activeSuggestIndex === nSuggest - 1) {
          setActiveSuggestIndex(0)
        }
      } else if (key === 'Enter') {
        setSuggestedText(suggest[activeSuggestIndex].label.toLowerCase())
      }
    }
  }
  const clearHandler = () => {
    setSuggestedText(placeholder)
    searchWrapper.current.classList.remove(style.showClearIcon)
  }



  return (
    <SearchWrapper ref={searchWrapper}>
      <IconGrouper>
        <IconWrapper sx={{ left: 0, ml: 1 }}>
          <SearchIcon className={style.icon} />
        </IconWrapper>
      </IconGrouper>
      <Input 
        inputProps={{ 'aria-label': 'search' }} 
        value={searchText} 
        onChange={handleChange} 
        onFocus={focusHandler} 
        onBlur={blurHandler} 
        onKeyDown={keyDownHandler} 
      />
      <IconGrouper 
        sx={{ 
          right: 0
        }}
      >
        <IconWrapper 
          sx={{ 
            cursor: 'pointer',
            mr: 1
          }} 
          className={style.clearIconWrapper}
          onClick={clearHandler}
        >
          <CloseRounded className={`${style.icon} ${style.clearIcon}`} sx={{ fontSize: '18px!important' }} />
        </IconWrapper>
        <IconWrapper 
          sx={{ 
            cursor: 'pointer',
            mr: 1,
            '&:hover': {
              '& .MuiSvgIcon-root': {
                color: '#ffd23f!important'
              }
            }
          }}
        >
          <MicIcon className={style.icon} sx={{ fontSize: '24px!important' }} />
        </IconWrapper>
      </IconGrouper>
    </SearchWrapper>
  )
}