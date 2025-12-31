import { useState } from 'react'
// import LifecycleLogger from './components/LifecycleLogger'
// import LifecycleLogger from './components/LifecycleLoggerClass'
// import MyLifecycleLoggerClass from './components/MyLifecycleLoggerClass'
import MyLifecycleLogger from './components/MyLifecycleLogger'

function App() {
  const [showLogger, setShowLogger] = useState(false)

  return (
    <div className='container'>
      <h2>React Lifecycle Playground</h2>

      {/* Toggle LifecycleLogger */}
      <button
        className='primary-btn'
        onClick={() => setShowLogger(!showLogger)}
      >
        {showLogger ? 'Unmount Logger' : 'Mount Logger'}
      </button>

      {showLogger && <MyLifecycleLogger />}
    </div>
  )
}
export default App
