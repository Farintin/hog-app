// import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom'
//import { Helmet } from 'react-helmet'
import Home from './pages/Home'
import SiteLayout from './layout/SiteLayout'
import SearchResult from './pages/SearchResult'
import About from './pages/site/About'
import Services from './pages/site/Services'
import Contact from './pages/site/Contact'

import { ThemeProvider } from '@mui/material/styles'
import { theme } from './theme'
import './App.css'





function App() {
  return (
    <ThemeProvider theme={theme}>
      {/*<Helmet>
          <meta charSet="utf-8" />
          <title>Hog</title>
          <meta name="description" content="Hog application" />
      </Helmet>*/}

      <Routes>
        <Route path='' element={<Home />} />
        <Route path='' element={<SiteLayout />}>
          <Route path='searchresult' element={<SearchResult />} />
          <Route path='about' element={<About />} />
          <Route path='services' element={<Services />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>

    </ThemeProvider>
  )
}



export default App
