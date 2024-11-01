import { heroes } from "../data/heros"



export const GetHeroByPublisher=(publisher)=>{
    console.log('eee')
    const validPublisher=['DC Comics', 'Marvel Comics']
    if (validPublisher.includes(publisher)){
        return heroes.filter(hero=>hero.publisher===publisher)
    }
    else{
        throw new Error (`${publisher} is not valid publisher`)
    }
    
}