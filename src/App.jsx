import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Post from './pages/Post'

function App() {

 return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/post/:postId' element={<Post/>}/>

        </Routes>
      </BrowserRouter>
    </> 
  )
}

export default App
