import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TotalVSPlatformFee from './graphs/TotalVSPlatformFee'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="graphs">
        <div className="graph">
          <TotalVSPlatformFee />
        </div>
        <div className="graph">
          <TotalVSPlatformFee />
        </div>
        <div className="graph">
          <TotalVSPlatformFee />
        </div>
      </div>
    </>
  )
}

export default App
