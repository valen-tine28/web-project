//  import  from 'react'
 import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './pages/Home'

 function App() {
   return (
     <div>
         <div>
          <BrowserRouter>
          <Routes >
            <Route path='/' element={<Home />} />
          </Routes>
          </BrowserRouter>
          
         </div>
     </div>
   )
 }
 
 export default App
