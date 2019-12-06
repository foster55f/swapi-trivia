import React, { Component } from 'react';
import './App.css';
import MovieContainer from '../MovieContainer/MovieContainer';
import Login from '../Login/Login';


class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        name: '',
        quote: '',
        ranking: '',
      },
      favorites: [],
      clickedFilm: ''
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
      favorites: [],
      clickedFilm: ''
    })
  }


  render() {
    return (
      <main>
        <div>
          <Login enterUserInfo = {this.enterUserInfo}/>
          {/* <MovieContainer foster={['yello', 'dave', 'its', 'all', 'coming', 'together']}/> */}
          <UserData logOut={this.logOut} name={this.state.user.name} quote={this.state.user.quote} status={this.state.user.ranking}/>
        </div>
      </main>
    )
  }
}

export default App;
