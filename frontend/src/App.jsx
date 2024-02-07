import { useState } from 'react'
import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom';
import Signup from './Signup'
import Login from './Login'
import Dashbord from './Dashbord';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

<Routes>
      <Route path='/signup'element={<Signup/>}></Route>
      <Route path='/login'element={<Login/>}></Route>
      <Route path='/dashbord'element={<Dashbord/>}></Route>
   
    </Routes>

    </>
  )
}

export default App
