import { useState, createContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Box, Button, Stack, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { AutocompleteSearch } from './Autocomplete'





const SubmitBtns = styled(Container)(({ theme }) => ({
    display: 'flex', 
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 24,
    [theme.breakpoints.down('md')]: {
        width: '100%',
        marginTop: 0,
        paddingTop: 32
    }
}))
const StyledStack = styled(Stack)(({ theme }) => ({
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      width: '100%'
    }
}))
const SubmitBtn = styled(Button)(({ theme }) => ({
    borderRadius: '12px!important',
    margin: '8px!important',
    textTransform: 'capitalize!important',
    fontWeight: '700!important',
    fontSize: '18px!important',
    backgroundColor: theme.palette.primary.dark,
    color: '#fff!important',
    borderWidth: 2, 
    borderStyle: 'solid', 
    borderColor: theme.palette.primary.darker,
    width: '180px!important',
    minWidth: '150px',
    height: 80,
    flexDirection: 'column',
    '&:hover': {
      backgroundColor: theme.palette.secondary.darker,
      borderColor: theme.palette.secondary.light,
      borderWidth: 2
    },
    [theme.breakpoints.down('md')]: {
      width: '55%!important',
      height: 60,
      fontSize: '13px!important',
      '& .text-secondary': {
        fontSize: 9
      }
    }
}))
const SubmitBtnSecondTxt = styled(Typography)(({ theme }) => ({
    fontSize: 11,
    fontWeight: 500
}))



const SearchContext = createContext()

function SearchSection (props) {
    const searchPlaceholder = 'How are You!...'
    const [searchText, setSearchText] = useState(searchPlaceholder)
    const navigate = useNavigate()

    const search = (category) => {
        if (searchText !== '' && searchText !== searchPlaceholder) {
            navigate(`/site/searchresult?category=${category}&q=${searchText}`)
        }
    }

    return (
        <Box sx={{ mt: 4 }}>
            <SearchContext.Provider 
                value={[searchText, setSearchText]}
            >
                <AutocompleteSearch suggestionData={props.suggestionData} placeholder={searchPlaceholder} />
                <SubmitBtns>
                    <StyledStack direction={{ xs: 'column', md: 'row' }}>
                        <SubmitBtn 
                            variant="contained"
                            onClick={() => search('individual')}
                        >
                            {'individual'}
                            <SubmitBtnSecondTxt className={`text-secondary`}>(For myself)</SubmitBtnSecondTxt>
                        </SubmitBtn>
                        <SubmitBtn 
                            variant="contained"
                            onClick={() => search('couples')}
                        >
                            {'couples'}
                            <SubmitBtnSecondTxt className={`text-secondary`}>(For me and my partner)</SubmitBtnSecondTxt>
                        </SubmitBtn>
                        <SubmitBtn 
                            variant="contained"
                            onClick={() => search('teen')}
                        >
                            {'teen'}
                            <SubmitBtnSecondTxt className={`text-secondary`}>(For my child)</SubmitBtnSecondTxt>
                        </SubmitBtn>
                    </StyledStack>
                </SubmitBtns>
            </SearchContext.Provider>
        </Box>
    )
}





export { SearchSection, SearchContext }