import { Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import FuzzySearch from 'fuzzy-search';
import autocompleteData from './../data/autocomplete';
import AutocompleteSearchBar from './../components/AutocompleteSearchBar';



const HomeContainer = styled(Container)(({ theme }) => ({
  width: '100%', 
  padding: 3, 
  display: 'flex', 
  flexDirection: 'column', 
  alignItems: 'center', 
  flexGrow: 1, 
  marginTop: '12vh',
  [theme.breakpoints.down('md')]: {
    marginTop: '32px'
  }
}))
const BrandText = styled(Typography)(({ theme }) => ({
  fontSize: 64,
  [theme.breakpoints.up('sm')]: {
    fontSize: 94
  },
  [theme.breakpoints.down('md')]: {
    marginBottom: 0
  }
}))

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
  )
}