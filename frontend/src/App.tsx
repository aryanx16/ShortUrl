import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home'
import { Toaster } from 'react-hot-toast'
function App() {
  return (
   <>
    <BrowserRouter>
      <Toaster/>
    <Routes>
      <Route path='/home' element={<HomePage/>}/>
    </Routes>
    </BrowserRouter>
   </>
  )
}

export default App
