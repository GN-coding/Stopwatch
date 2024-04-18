import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {min: 0, sec: 0, isRunning: false}

  componentDidMount() {
    this.timerId = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  tick = () => {
    const {isRunning} = this.state
    if (isRunning) {
      const {sec} = this.state
      if (sec === 59) {
        this.setState(prevState => ({min: prevState.min + 1, sec: 0}))
      } else {
        this.setState(prevState => ({sec: prevState.sec + 1}))
      }
    }
  }

  handleStart = () => {
    this.setState({isRunning: true})
  }

  handleStop = () => {
    this.setState({isRunning: false})
  }

  handleReset = () => {
    this.setState({min: 0, sec: 0, isRunning: false})
  }

  render() {
    const {min, sec} = this.state
    return (
      <div className="app-con">
        <h1 className="heading">Stopwatch</h1>
        <div className="card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
            alt="stopwatch"
          />
          <span className="time-head"> Timer</span>
          <h1>
            {min < 10 ? `0${min}` : min}:{sec < 10 ? `0${sec}` : sec}
          </h1>
          <button
            className="btn start"
            type="button"
            onClick={this.handleStart}
          >
            Start
          </button>
          <button className="btn stop" type="button" onClick={this.handleStop}>
            Stop
          </button>
          <button
            className="btn reset"
            type="button"
            onClick={this.handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    )
  }
}

export default Stopwatch
