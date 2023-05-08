import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { familyTree } from './data'
import Family from './Family'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Family familyTree={familyTree} />
    </div>
  )
}

export default App
