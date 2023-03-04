import React, {useContext, useState} from "react";
import './signup.css'
import { AuthContext } from "../helpers/Context";
const Signup = ()=>{
    const [nameval ,setNameVal] = useState('')
    const [email, setEmail] = useState('')
    const [password , setPassword] = useState()
    const [alert , setAlert] = useState(false)
    const {setPage} = useContext(AuthContext)

       const getUp = ()=>{
        if(nameval ==='' || nameval===null && 
        email==='' || email ===null || email ===Number || !email.includes('@') &&
        password <4  || password > 20 || password===0) {
        setAlert(true)
         } else 
         {
            setAlert(false)
         }
       }

   
    return (

  <div className='loginContainer'>
    {alert ? <h1 className="header" style={{color:'red'}}>Something went wrong </h1> : ''}
       <div className="innerContainer">
    <h1 className="header">Sign up</h1>
        <input type="email"className='box email' placeholder='email' onChange={e=>setEmail(e.target.value)} />

        <input type="text"  className='box name ' placeholder='username...'
         onChange={e=>setNameVal(e.target.value)}/>

        <input type="password"  className='box password'placeholder='password'
         onChange={e=>setPassword(e.target.value)}
        />
        <button className='button up' onClick={getUp}>Sign up</button>
        <p>Already have an account ?</p>
        <button className='button in' onClick={()=>setPage('in')} >Sign in </button>
       </div>
    </div>
    )
}
export default Signup