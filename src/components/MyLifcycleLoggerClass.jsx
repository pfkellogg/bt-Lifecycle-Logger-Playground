import { Component } from 'react'

class MyLifecycleLoggerClass extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  componentDidMount() {
    console.log('Component did mount...')
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log(
        `Count updated from ${prevState.count} to ${this.state.count}`
      )
    }
  }
  componentWillUnmount() {
    console.log('Component will unmount...')
  }

  incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }))
  }

  render() {
    return (
      <div className='logger-container'>
        <h2>MyLifecycleLogger (Class Component)</h2>
        <p>Count: {this.state.count}</p>
        <button
          className='secondary-btn'
          onClick={this.incrementCount}
        >
          Update
        </button>
      </div>
    )
  }
}

export default MyLifecycleLoggerClass
