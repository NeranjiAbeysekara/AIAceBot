import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Interview from './pages/Interview'
import Results from './pages/Results'
import Profile from './pages/Profile'
import History from './pages/History'
import Settings from './pages/Settings'


const App = () => {
  return (
    <div>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/dashboard' element={<Dashboard/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/interview' element={<Interview/>}/>
       <Route path='/results' element={<Results/>}/>
       <Route path='/profile' element={<Profile/>}/>
       <Route path='/history' element={<History/>}/>
       <Route path='/settings' element={<Settings/>}/>
      </Routes>
      
    </div>
  )
}

export default App
