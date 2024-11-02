import React, { useMemo } from 'react'
import { UseForm } from '../../Hooks/UseForm'
import { GetHeroByNme } from '../../helpers/GetHeroByName'
import { HeroCard } from '../Hero/HeroCard'
import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'

export const SearchScreen = () => {

  const navigate=useNavigate()
  const location=useLocation()
  const {q=''}=queryString.parse(location.search)
  // console.log(query)



  const [{searchText},handleInputChange,reset]=UseForm({
    searchText:q
  })
  
  
  
  const heroFiltered=useMemo(()=>GetHeroByNme(q),[q])
  
  const handleSearch=(e)=>{
    e.preventDefault()
    navigate(`?q=${searchText}`)
    // reset( )
  }



  return (
    <>
    <h1>Search</h1>
    <hr/>
    <div className='row'>
      <div className='col-5'>
        <form onSubmit={handleSearch}>
          <input
            type='text'
            placeholder='Search HERO'
            className='form-control'
            name='searchText'
            autoComplete='off'
            value={searchText}
            onChange={handleInputChange}

          />
          <button className=' btn btn-outline-primary mt-1' type='submit'>
            Search
          </button>
        </form>

      </div>
      <div className='col-7'>
        <h4>Results</h4>
        {
          (q==='')
          ?<div className='alert alert-info'>Search hero</div>
          :(heroFiltered.length===0)
            &&<div className='alert alert-danger'>There is not result :{q}</div>
        } 
        <hr/>
        {
          heroFiltered.map(hero=>(<HeroCard key={hero.id} {...hero}/>))
        }
        
      </div>
    </div>
    </>
  )
}
