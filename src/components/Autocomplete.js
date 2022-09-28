import { useRef, useState, useEffect, createContext, useContext } from 'react'
import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import SearchBar from './SearchBar'
import AutocompleteList from './AutocompleteList'

import style from './Autocomplete.module.css'

import { SearchContext } from './SearchSection'





const Autocomplete = styled(Box)(({ theme }) => ({
    borderRadius: 64/2 - 8,
    width: 700,
    [theme.breakpoints.down('md')]: {
      width: '60vw'
    },
    [theme.breakpoints.down('sm')]: {
      width: '80vw'
    }
}))



const AutocompleteContext = createContext()
function AutocompleteSearch(props) {
    const searchTextState = useContext(SearchContext)
    const suggestionData = props.suggestionData
    const [suggest, setSuggest] = useState([])
    const searchPlaceholder = props.placeholder ? props.placeholder : 'How are You...'
    const [searchText, setSearchText] = searchTextState ? searchTextState : useState(searchPlaceholder)
    const [activeSuggestIndex, setActiveSuggestIndex] = useState(0)
    const autocomplete = useRef(null)

    function setSuggestedText(value) {
        setSearchText(value)
        setSuggest([])
    }


    
    useEffect(() => {
        if (suggest.length !== 0) {
            autocomplete.current.classList.add(style.show)
        } else {
            autocomplete.current.classList.remove(style.show)
        }
    }, [suggest])
    


    return (
        <Autocomplete ref={autocomplete}>
            <AutocompleteContext.Provider 
                value={{ 
                    useSuggestState: [suggest, setSuggest], 
                    component: autocomplete, 
                    useSuggestIndexState: [activeSuggestIndex, setActiveSuggestIndex],
                    setSuggestedText: setSuggestedText
                }}
            >
                <SearchBar autocompleteData={suggestionData} placeholder={searchPlaceholder} />
                <AutocompleteList 
                    suggestion={suggest} 
                    onClickHandler={setSuggestedText} 
                />
            </AutocompleteContext.Provider>
        </Autocomplete>
    )
}





export { AutocompleteSearch, AutocompleteContext }