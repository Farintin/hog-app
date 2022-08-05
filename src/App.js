// import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SearchResult from './pages/SearchResult'

import { ThemeProvider } from '@mui/material/styles'
import { theme } from './styles'
import {Helmet} from 'react-helmet'

import './App.css'





function App() {
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Hog</title>
          <meta name="description" content="Hog application" />
      </Helmet>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/site/searchresult' element={<SearchResult />} />
      </Routes>

    </ThemeProvider>
  )
}



export default App
