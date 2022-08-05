import Header from '../layout/Header'
import { Container, Box, Typography } from '@mui/material'
import SearchEngineTwoColor from '../components/icons/SearchEngineTwoColor'
import SmileyFaceMonochromatic from '../components/icons/SmileyFaceMonochromatic'
import CoupleMonochromatic from '../components/icons/CoupleMonochromatic'
import FortniteOutline from '../components/icons/FortniteOutline'



export default function(props) {
  let params = (new URL(document.location)).searchParams
  let category = params.get('category') 
  let q = params.get('q')
  
  let illustrativeIcon
  switch (category) {
    case 'individual':
      illustrativeIcon = <SmileyFaceMonochromatic style={{ marginTop: 24 }} width={400} />
      break
    
    case 'couples':
      illustrativeIcon = <CoupleMonochromatic width={400} />
      break
    
    case 'teen':
      illustrativeIcon = <FortniteOutline style={{ marginTop: 32 }} width={350} />
      break
  
    default:
      illustrativeIcon = <SearchEngineTwoColor width={450} />
      break
  }



  return (
    <Box id="App"
      sx={{ 
        bgcolor: '#f1f1f1'
      }}
    >
      <Box className="wrapper">
        <Header/>
        <Container 
            sx={{ 
              display: 'flex', 
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
          <Box sx={{ mt: 3, mb: 2 }}>
            {illustrativeIcon}
          </Box>
          <Typography 
            sx={{ 
              fontSize: 50, 
              fontWeight: 500, 
              letterSpacing: 0,
              color: '#00a54f'
            }}
          >
            Search result
          </Typography>
        </Container>
      </Box>
    </Box>
  )
}