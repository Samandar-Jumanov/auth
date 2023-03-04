import React, {useState} from 'react'
import './App.css'
import { AuthContext } from './helpers/Context'
import Signup from './signup/signup'
import Login from './login/login'
const App = ()=>{
  const [page , setPage ] = useState('up')
   return(
    <div className="App">
      <AuthContext.Provider value={{setPage}}>
      {page === 'up' && <Signup/>}
      {page ==='in' && <Login/>}
      </AuthContext.Provider>
    </div>
   )
}
export default App