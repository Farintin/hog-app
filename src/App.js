// import logo from './logo.svg';
import './App.css'
import Header from './layout/Header'
import Home from './pages/Home'

import { ThemeProvider } from '@mui/material/styles'
import { theme } from './styles'
import { Box } from '@mui/system'
import { useRef } from 'react';

import {Helmet} from "react-helmet";





function App() {
  const appContainer = useRef(null);

  return (
    <ThemeProvider theme={theme}>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Hog</title>
          <meta name="description" content="Hog application" />
      </Helmet>

      <Box id="App">
        <Box className="wrapper" ref={appContainer}>
          <Header/>
          <Home appContainer={appContainer} />
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default App
