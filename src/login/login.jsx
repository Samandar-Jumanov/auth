import React, {useContext, useState}from 'react'
import './login.css'
import { AuthContext } from '../helpers/Context'
const Login = ()=>{
  const {setPage} = useContext(AuthContext)



   return (
     <div className='Login'>
        <div className="innerDiv">
          <h1 className="header">Sign in </h1>
          <input type="text" className='box email'placeholder='username or email...' />
          <input type="text" className='box password' placeholder='password...' />
          <button className='button in'>Sign in </button>
          <p>Dont have an account</p>
          <button
           onClick={()=>setPage('up')}
            className='button up'
           >Signup</button>
        </div>
     </div>
   )
}
export default Login