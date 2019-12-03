import React, { Component } from 'react';
import './App.css';
import MovieContainer from './MovieContainer';
import Login from './Login';


class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        name: '',
        quote: '',
        ranking: ''
      }
    }
  }

  enterUserInfo = (userData) => {
    this.setState({
      user:{...userData}
    })
  }

  render() {
    return (
      <main>
        <div>
          <Login enterUserInfo = {this.enterUserInfo}/>
          {/* <MovieContainer foster={['yello', 'dave', 'its', 'all', 'coming', 'together']}/> */}
          </div>
      </main>
    )
  }
}

export default App;
