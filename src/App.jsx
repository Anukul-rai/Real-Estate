import { useState } from 'react'
import Header from './components/HEader'
import About from './components/About'
import Projects from './components/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full overflow-hidden'>
    <Header/>
    <About/>
    <Projects/>
    </div>
  )
}

export default App
