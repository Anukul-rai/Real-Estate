import { useState } from 'react'
import Header from './components/HEader'
import About from './components/About'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full overflow-hidden'>
    <ToastContainer/>
    <Header/>
    <About/>
    <Projects/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default App
