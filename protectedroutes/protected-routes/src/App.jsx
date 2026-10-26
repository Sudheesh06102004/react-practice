import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Settings from './pages/Settings'
import Navbar from './Components/Navbar'  
import PrivateRoute from './Components/PrivateRoute.jsx'
import { Provider } from 'react-redux'
import storef from './app/store'

const App = () => {
  return (
    <Provider store={storef}>
    <BrowserRouter>
    <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route element={<PrivateRoute />}>
            <Route path="/settings" element={<Settings />} />
          </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  )
}

export default App