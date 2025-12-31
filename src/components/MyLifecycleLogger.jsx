import { useState, useEffect } from 'react'

const MyLifecycleLogger = () => {
  const [count, setCount] = useState(0)

  // useEffect() takes in a function and a dependency array
  // emtpy dependency array means this runs only once on mount

  // componentDidMount and componentWillUnmount
  useEffect(() => {
    console.log('Component mounted')
    return () => {
      console.log('Component unmounted')
    }
  }, [])

  // useEffect() takes in a function and a dependency array
  // this runs on unmount when we return a function

  // componentDidUpdate
  useEffect(() => {
    if (count > 0) {
      console.log('Component updated... ', count)
    }
  }, [count])

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1)
  }

  return (
    <div className='logger-container'>
      <h2>MyLifecycleLogger (Function Component)</h2>
      <p>Count: {count}</p>
      <button
        onClick={incrementCount}
        className='secondary-btn'
      >
        Update
      </button>
    </div>
  )
}

export default MyLifecycleLogger
