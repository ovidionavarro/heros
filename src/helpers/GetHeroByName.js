import { heroes } from "../data/heros"



export const GetHeroByNme=(name='')=>{
    console.log('eeeeeee')
    if (name===''){
        return []
    }
    name=name.toLowerCase()
    return heroes.filter(hero=>hero.superhero.toLowerCase().includes(name))  
    // return heroes
}