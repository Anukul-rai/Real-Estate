import { useState } from 'react'
import Header from './components/HEader'
import About from './components/About'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className='w-full overflow-hidden'>
        <ToastContainer/>
        <Routes>

          {/* ----Homepage Route---- */}
          <Route
          path="/"
          element={
          <>
            <Header/>
            <About/>
            <Projects/>
            <Testimonials/>
            <Contact/>
            <Footer/>
          </>
          }
          />
          {/* ----Sign UP Route---- */}
          <Route path="/sign-up" element={<Signup/>}/>
        </Routes>
        
      </div>
    </Router>
    
  )
}

export default App
