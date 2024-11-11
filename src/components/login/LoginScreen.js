import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext'
import { types } from '../../types/types'

export const LoginScreen = () => {


  const navigate=useNavigate()
  const {user,dispatch}=useContext(AuthContext)
  console.log(user,dispatch)

  // console.log(context)
  const handleLogin=()=>{
    // navigate('/marvel',{
    //   replace:true
    // })
    const action={
      type:types.login,
      payload:{
        name:'ovidio',
      }
    }
    dispatch(action)
     navigate('/marvel',{
      replace:true
    })
  }
  
  

  
  return (

    <div className='container mt-5'>
      <h1>
        login
      </h1>
      <hr/>
      <button className='btn btn-primary'
              onClick={handleLogin}>
          login
      </button>

    </div>
  )
}
