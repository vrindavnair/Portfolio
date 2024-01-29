
import BasicExample from './components/navbar'
import Body from './components/Body'
import About from './components/about'
import Myprojects from './components/Myprojects'
import ContactAs from './components/ContactAs'
import Education from './components/Education'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Pages from './Pages'  


function App() {

  return (
    <>
     
      <BrowserRouter>
      
        <Routes>
         
        <Route path="/" element={<BasicExample/>}>
           <Route path="/" element={<Pages/>}/>
          
            <Route path='/body' element={<Body />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/myprojects' element={<Myprojects />}></Route>
            <Route path='/contactas' element={<ContactAs />}></Route>
            <Route path='/edu' element={<Education />}></Route>
           </Route>
           

        </Routes>
      </BrowserRouter>


    </>
  )
}
export default App
