import React from 'react'
import NavLink from './navLink'

const App = () => (
  <div className='row'>
    <div className='small-12 columns'>
      <h1>Validation</h1>
      <ul role="nav" className="menu">
        <li><NavLink to="/form">Form</NavLink></li>
        <li><NavLink to="/reports">Reports</NavLink></li>
      </ul>
    </div>
  </div>
);

export default App;
