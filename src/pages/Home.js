import Header from './../layout/HomeHeader'

import { Container, Box, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { SearchSection } from './../components/SearchSection'

import FuzzySearch from 'fuzzy-search'
import autocompleteData from './../data/autocomplete'





const HomeWrapper = styled(Container)(({ theme }) => ({
  width: '100%', 
  padding: 3, 
  display: 'flex', 
  flexDirection: 'column', 
  alignItems: 'center', 
  flexGrow: 1, 
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
  fontSize: 64,
  [theme.breakpoints.up('sm')]: {
    fontSize: 94
  },
  [theme.breakpoints.down('md')]: {
    marginBottom: 0
  }
}))
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
  )
}