import React from 'react'
import { Routes } from './routes'
import NavBar from './components/NavBar/NavBar'
import Header from './components/Header/header'
import Servicedesk from './pages/servicedesk/Servicedesk'


export default function Home() {
  return (
   <div> 
    <Header />
    <NavBar />
    <Servicedesk />
      </div>
  )
}
