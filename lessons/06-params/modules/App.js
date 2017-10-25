import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    console.log('App render');
    console.log('App.props',this.props);
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <input  />
        <ul role="nav">
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/repos">Repos</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
})
