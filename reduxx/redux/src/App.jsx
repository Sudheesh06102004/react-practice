import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Users from './pages/Users';
import User from './pages/User';
import About from './pages/About';
import Contact from './pages/Contact';
import ErrorPage from './pages/Error';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/user/:username?' element={<User/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App