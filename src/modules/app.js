import React, { Component } from 'react'
import { Link } from 'react-router'
import Home from './home'
import Header from './header'

class App extends Component {
  render() {
    return (
      <div>
        <div className='row'>
          <Header/>
        </div>
        <div className='row'>
          {/* add this */}
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default App;
