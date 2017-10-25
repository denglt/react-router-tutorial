import React from 'react'
import NavLink from './NavLink'
import { browserHistory } from 'react-router'

export default React.createClass({

  getInitialState: function () {
    this.renderCnt = 0;
            return {

            };
  },

 // ask for `router` from context
  contextTypes: {
    router: React.PropTypes.object
  },

  handleSubmit(event){
    //console.log(event);
     console.log(this.context);
     event.preventDefault();  //通知浏览器不要执行与事件关联的默认动作

     const userName = event.target.elements[0].value;
     const repo = event.target.elements[1].value;
     const path = `/repos/${userName}/${repo}`; //`string` 是模板字符串，ES2015新增的符号 ,模板字符串里面${var}是变量的占位符
     console.log(path);
     //browserHistory.push(path);
     this.context.router.push(path);
  },

  render() {
    this.renderCnt++;
    console.log('repos render' + this.renderCnt);
    return (
      <div>
        <h2>Repos</h2>
        <ul>
          <li><NavLink to="/repos/reactjs/react-router">React Router</NavLink></li>
          <li><NavLink to="/repos/facebook/react">React</NavLink></li>
               {/* add this form */}
          <li>
            <form onSubmit={this.handleSubmit}>
              <input type="text" placeholder="userName"/> / {' '}
              <input type="text" placeholder="repo"/>{' '}
              <button type="submit">Go</button>
            </form>
          </li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
