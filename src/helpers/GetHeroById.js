import { heroes } from "../data/heros"



export const GetHeroById=(id)=>{
    // console.log('her')
    return heroes.find(hero=>hero.id===id)
}