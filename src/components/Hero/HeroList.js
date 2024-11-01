import React, { useMemo } from 'react'
import { GetHeroByPublisher } from '../../helpers/GetHeroByPublisher'
import { HeroCard } from './HeroCard'



export const HeroList = ({publisher}) => {

    const heroes=useMemo(()=>GetHeroByPublisher(publisher),[publisher])
  return (
    <>
    <h1>
        Hero List -{publisher}
    </h1>
    <div className='row rows-cols-1 row-cols-md-3 g-3'>
    

        {
        heroes.map(hero=>(
        
        <HeroCard {...hero}/> 
        // manera de pasar como poperties un objeto desesctructurado
        ))
        }


    
    </div>
    </>

    )
}
