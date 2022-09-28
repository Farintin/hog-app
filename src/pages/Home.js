import { Container, Box } from '@mui/material'
import { alpha, styled } from '@mui/material/styles'

import Header from './../layout/HomeHeader'
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
        backgroundImage: `linear-gradient(${alpha('#000', .4)}, ${alpha('#000', .4)}), 
          url(/img/holding_hands_from_better-help.jpg)`
      }}
    >
      <Box className="wrapper">
        <Header/>
        <HomeWrapper>

            {/*<BrandText variant="h1">
              HOG
            </BrandText>*/}
            <BrandLogo src="/logo/hog_logo_silver_w-150.png" />
            <SearchSection suggestionData={searcher} />

        </HomeWrapper>
      </Box>
    </Box>
  )
}