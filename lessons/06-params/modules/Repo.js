import React from 'react'

export default React.createClass({
  render() {
    console.log('Repo render')
    return (
          <div>
               <h2>Repo</h2>
               <h3>{this.props.params.repoName}</h3>
          </div>
      );
  }
})
