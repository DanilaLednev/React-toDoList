import { Component } from "react";

export class Day extends Component {
  constructor(props) {
    super(props)

    this.state = {
      day: new Date().toLocaleDateString()
    }
  }

  // componentDidMount() {
  //   this.dayID = setInterval(() => 
  //   this.setDate(), 100000)
  // }

  // componentWillUnmount() {
  //   clearInterval(this.dayID)
  // }

  setDate() {
    this.setState({
      day: new Date().toLocaleDateString()
    })
  }

  render() {
    return (
      <div className="date-now">
        <p> { this.state.day } </p>
      </div>
    )
  }
}