import React, { Component } from 'react';
import './App.css';
import MovieContainer from '../MovieContainer/MovieContainer';
import Login from '../Login/Login';
import UserData from '../UserData/UserData';


class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        name: '',
        quote: '',
        ranking: '',
      },
    }
  }

  enterUserInfo = (userData) => {
    this.setState({
      user: {...userData}
    })
  }

  logOut = () => {
    this.setState({
      user: {
        name: '',
        quote: '',
        ranking: '',
      },
    })
  }


  render() {
    return (
      <main>
        <div>
          <Login enterUserInfo = {this.enterUserInfo}/>
          {/* <MovieContainer foster={['yello', 'dave', 'its', 'all', 'coming', 'together']}/> */}
          <UserData logOut={this.logOut} name={this.state.user.name} quote={this.state.user.quote} ranking={this.state.user.ranking}/>
          <MovieContainer />
        </div>
      </main>
    )
  }
}

export default App;
