<<<<<<< HEAD
import Header from './../layout/HomeHeader'

import { Container, Box, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { SearchSection } from './../components/SearchSection'

import FuzzySearch from 'fuzzy-search'
import autocompleteData from './../data/autocomplete'





const HomeWrapper = styled(Container)(({ theme }) => ({
=======
import { Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import FuzzySearch from 'fuzzy-search';
import autocompleteData from './../data/autocomplete';
import AutocompleteSearchBar from './../components/AutocompleteSearchBar';



const HomeContainer = styled(Container)(({ theme }) => ({
>>>>>>> e25a6c8374dcf2388582ba72f88a3059f8483d2d
  width: '100%', 
  padding: 3, 
  display: 'flex', 
  flexDirection: 'column', 
  alignItems: 'center', 
  flexGrow: 1, 
<<<<<<< HEAD
  marginTop: '5vh',
  [theme.breakpoints.down('md')]: {
    marginTop: 24
  }
}))

const BrandText = styled(Typography)(({ theme }) => ({
  color: '#fff', 
  fontWeight: 700, 
  fontFamily: 'Product Sans', 
  letterSpacing: 3, 
  mb: 3,
=======
  marginTop: '12vh',
  [theme.breakpoints.down('md')]: {
    marginTop: '32px'
  }
}))
const BrandText = styled(Typography)(({ theme }) => ({
>>>>>>> e25a6c8374dcf2388582ba72f88a3059f8483d2d
  fontSize: 64,
  [theme.breakpoints.up('sm')]: {
    fontSize: 94
  },
  [theme.breakpoints.down('md')]: {
    marginBottom: 0
  }
}))
<<<<<<< HEAD
const BrandLogo = styled('img')(({ theme }) => ({
  width: 110,
  marginBottom: 24,
  [theme.breakpoints.down('md')]: {
    width: 80,
    marginBottom: 0
  },
  [theme.breakpoints.down('sm')]: {
    width: 70
  }
}))





export default function(props) {
  const searcher = new FuzzySearch(autocompleteData, ['label', 'year'])



  return (
    <Box id="App" 
      sx={{ 
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://dy7glz37jgl0b.cloudfront.net/home/betterhelp/hero-bg.jpg)'
      }}
    >
      <Box className="wrapper">
        <Header/>
        <HomeWrapper>

            {/*<BrandText variant="h1">
              HOG
            </BrandText>*/}
            <BrandLogo src="hog_logo2_w-150.png" />
            <SearchSection suggestionData={searcher} />

        </HomeWrapper>
      </Box>
    </Box>
=======

const searcher = new FuzzySearch(autocompleteData, ['label', 'year']);

export default (props) => {
  return (
    <HomeContainer>

        <BrandText
          variant="h1" 
          sx={{
            color: '#fff', 
            fontWeight: 700, 
            fontFamily: 'Product Sans', 
            letterSpacing: 3, 
            mb: 3 
          }}
        >
          HOG
        </BrandText>
        <AutocompleteSearchBar searchData={searcher} appContainer={props.appContainer} />

    </HomeContainer>
>>>>>>> e25a6c8374dcf2388582ba72f88a3059f8483d2d
  )
}