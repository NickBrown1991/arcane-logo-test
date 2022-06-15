import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"
import Tilt from 'react-vanilla-tilt';

class LambdaDemo extends Component {
  constructor(props) {
    super(props)
    this.state = { loading: false, msg: null }
  }

  handleClick = api => e => {
    e.preventDefault()

    this.setState({ loading: true })
    fetch("/.netlify/functions/" + api)
      .then(response => response.json())
      .then(json => this.setState({ loading: false, msg: json.msg }))
  }

  render() {
    const { loading, msg } = this.state

    return (
      <p>
        Hi Sam
      </p>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App">
            <Tilt options={{ scale: 2 }}
            style={{
            width: 600,
            backgroundColor: "#282c34",
            }}>
              <img src={logo} className="App-logo" alt="logo" />
            </Tilt>
          </div>
        </header>
      </div>
    )
  }
}

export default App
