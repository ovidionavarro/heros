import React from 'react'
import { HeroList } from '../Hero/HeroList'

export const MarvelScreen = () => {
  return (
    <>
    <h1>Heros Marvel</h1>
    <hr/>
    <HeroList  publisher='Marvel Comics'/>
    </>
  )
}
