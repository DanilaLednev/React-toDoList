import { Component } from "react";

export class Clock extends Component {
  constructor(props) {
    super(props)

    this.state = {
      time: new Date().toLocaleTimeString()
    }
  }

  componentDidMount() {
    this.timerID = setInterval(() => 
    this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      // day: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString() 
    })
  }

  render() {
    return (
      <div className="time-now" >
        <p> { this.state.time } </p>
      </div>
    )
  }
}