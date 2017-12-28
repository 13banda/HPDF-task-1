import React, { Component } from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'
//importing custom app components
import Content from './content'
import Appbar from './appbar'
import Pro from './profile-card'
import Trends from './Trends'
import FollowList from './followlist'
import Main from './main-content';
// import global styles
import './global-styles.js'

// random color
const randomColor = () => '#' + Math.random().toString(16).substr(-6)

class NewTweet extends Component{

  render(){
  const style={
    div:{
      border: '1px solid #e6ecf0',
      margin:'0 auto',
      backgroundColor: '#f5f8fa',
      color: '#1DA1F2',
      padding: "10px 0px",
      textAlign: 'center',
      fontSize: '16px',
    },
    img:{
      width:32,
      height:32,
      borderRadius: '50%',
      left: 28,
      position: "relative",
      top: 13,
    }
  }
    return (
      <div style={{width: 590,}}>
        <div style={style.div}>
            See new Tweets
        </div>
      </div>
    );
  }

}
class App extends Component {

  render() {
    const pageStyle = {
      width: 1190,
      padding: '60px 14px 15px ',
      position:'relative',
      margin :'0 auto',
    }
    return (
      <div>
        <div id='appbar'></div>
        <div style={pageStyle}>
          <div style={{float:'left'}}>
            <Pro />
            <Trends style={{width:2}} />
          </div>
          <div id="content" style={{float: 'left',margin: '0 10px',}}>
            <Main />
          </div>
          <div style={{float:'left'}}>
            <FollowList />
          </div>
        </div>
      </div>
    )
  };
}
render(<App ></App>,document.querySelector('#app'));
render(<Appbar />,document.querySelector('#appbar'));
