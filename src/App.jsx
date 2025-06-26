import { useState } from 'react'
import Header from './components/HEader'
import About from './components/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full overflow-hidden'>
    <Header/>
    <About/>
    </div>
  )
}

export default App
