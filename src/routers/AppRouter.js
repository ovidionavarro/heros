import React from 'react'
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import { DcScreen } from '../components/DC/DcScreen'
import { MarvelScreen } from '../components/Marvel/MarvelScreen'
import { LoginScreen } from '../components/login/LoginScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import { Navbar } from '../components/ui/Navbar'
import { DashBoardRoutes } from './DashBoardRoutes'

export const AppRouter = () => {
  return (
   <BrowserRouter>
        {/* <Navbar/> */}
        <Routes>
            {/* <Route path='/dc' element={<DcScreen/>}/>
            <Route path='/marvel' element={<MarvelScreen/>}/>
            <Route path='/search' element={<SearchScreen/>}/>
            <Route path='/' element={<MarvelScreen/>}/> */}
            <Route path='/login' element={<LoginScreen/>}/>
            <Route path='/*' element={<DashBoardRoutes/>}/>


        </Routes>
   </BrowserRouter> 
  )
}