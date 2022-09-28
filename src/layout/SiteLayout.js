import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import PageView from './PageView'
import Header from './Header'
import Footer from './Footer'
import { ChatBotButton } from '../components/ChatBot'
import ModeCommentIcon from '@mui/icons-material/ModeComment'
import { Container } from '@mui/material'




export default function() {
  return (
    <PageView>
      <Header/>
      <Outlet/>

      <Container 
        sx={{ 
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end'
        }}
      >
        <ChatBotButton>
          <ModeCommentIcon className='icon' sx={{ fontSize: 32 }}/>
        </ChatBotButton>
      </Container>
      <Footer/>
    </PageView>
  )
}