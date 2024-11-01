import React from 'react'
import { Navbar } from '../components/ui/Navbar'
import { Route, Routes } from 'react-router-dom'
import { MarvelScreen } from '../components/Marvel/MarvelScreen'
import { DcScreen } from '../components/DC/DcScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import { Hero } from '../components/Hero/Hero'
export const DashBoardRoutes = () => {
  return (
    <>
        <Navbar/>
        <div className='container'>
            <Routes>
                <Route path='marvel' element={<MarvelScreen/>}/>
                <Route path='dc' element={<DcScreen/>}/>
                <Route path='search' element={<SearchScreen/>}/>
                <Route path='/' element={<MarvelScreen/>}/>
                <Route path='hero/:id' element={<Hero/>}/>  
            </Routes>
        </div>
        
    </>
  )
}
