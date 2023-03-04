import React, {useContext, useState}from 'react'
import './login.css'
import { AuthContext } from '../helpers/Context'
const Login = ()=>{
  const {setPage} = useContext(AuthContext)
   const [email , setEmail] = useState('')
   const [password , setPassword] = useState('')
   const [alert, setAlert] = useState(false)

const getAuth = ()=>{
  if(email===''|| email<0 || !email.includes('@')|| email===Number &&
   password ===''|| password <0||password>20 
  ){
     setAlert(true)
  }
}
   return (
     <div className='Login'>
      {alert ? <h1 className='header' style={{color:'red'}}>Something went wrong</h1> : ''}
        <div className="innerDiv">
          <h1 className="header">Sign in </h1>
          <input type="text" className='box email'placeholder='username or email...' 
          onChange={e=>setEmail(e.target.value)}
          />
          <input type="text" className='box password' placeholder='password...' 
          onChange={e=>setPassword(e.target.value)}
          />
          <button className='button in' onClick={getAuth}>Sign in </button>
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