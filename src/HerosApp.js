import { useEffect, useReducer } from "react"
import { AuthContext } from "./auth/authContext"
import { AppRouter } from "./routers/AppRouter"
import { authReducer } from "./auth/authReducer"



const init=()=>{
  return JSON.parse(localStorage.getItem('user'))||{logged:false}
}
export const HerosApp = () => {
  
  const [user,dispatch]=useReducer(authReducer,{},init)
  
  useEffect(()=>{
    if(!user) return;
    localStorage.setItem('user',JSON.stringify(user))
  },[user])
  
  
  return (
    <AuthContext.Provider value={{
     user,
     dispatch
    }}>
      <AppRouter/>
    </AuthContext.Provider>
    

  )
}
// hasme una funcion fibonacci