import React, { useMemo, useState } from 'react'
import { useParams ,Navigate, useNavigate} from 'react-router-dom'
import { GetHeroById } from '../../helpers/GetHeroById'

export const Hero = () => {
  const {id}=useParams()

  const hero=useMemo(()=>GetHeroById(id),[id])
  
  if(!hero) {
    return <Navigate to='/'/>
  }
  
  const navigate=useNavigate()
  
  const handleReturn=()=>{  
      navigate(-1,{
        replace:true
      }) 
      
    
    // return <Navigate to='/' replace='true'/>
  }
  const {
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
  }=hero
  
  const imgPath=`/assets/${id}.jpg`

  return (
    <div className='row mt-5'>
      <div className='col-4'>
        <img src={imgPath}
        alt={hero.superhero}
        className='img-thumbnail'/>
      </div>
      <div className='col-8'>
        <h3>
          {superhero}
        </h3>
        <ul className='list-group list-group-flush'>
            <li className='list-group-item'><b>Alter Ego:</b>{alter_ego}</li>
            <li className='list-group-item'><b>Publisher:</b>{publisher}</li>
            <li className='list-group-item'><b>First Appearance:</b>{first_appearance}</li>

        </ul>
        <h5>
          Characters
        </h5>
        <p>
          {characters}
        </p>
        <button className=' btn btn-outline-info'
        onClick={handleReturn}>
          Back 
        </button>
      </div>

    </div>
  )
}
