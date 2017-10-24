import React from 'react'

export default React.createClass({
  render() {

    console.log('Repo render');
    console.log(this.props);
    console.log(this.props.params);
    return (
          <div>
               <h2>Repo</h2>
               <h3>{this.props.params.userName}</h3>
               <h3>{this.props.params.repoName}</h3>
          </div>
      );
  }
})
