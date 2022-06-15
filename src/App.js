import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"
import Tilt from 'react-vanilla-tilt';

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
