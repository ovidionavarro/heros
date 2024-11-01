import React from 'react'
import { HeroList } from '../Hero/HeroList'

export const DcScreen = () => {
  return (
    <>
    <h1>Heros DC</h1>
    <hr/>
    <HeroList  publisher='DC Comics'/>
    </>
  )
}
