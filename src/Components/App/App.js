import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import MovieContainer from '../MovieContainer/MovieContainer';
import Login from '../Login/Login';
import { retrieveAllMovies } from '../../fetchCalls'


class App extends Component {
  constructor() {
    super();
    this.state = {
      flicks: [],
      isSignedIn: false,
      user: {}
    }
  }

  componentDidMount() {
    console.log('hiii')
    retrieveAllMovies('https://swapi.co/api/films/')
      .then(flicks => this.setState({ flicks }))
  }

  enterUserInfo = (userData) => {
    this.setState({
      user: { ...userData },
      isSignedIn: true
    })
    console.log(this.state.user)
  }

  render() {
    const { isSignedIn } = this.state
    return (
      <main>
        {!isSignedIn && (
          <Login enterUserInfo={this.enterUserInfo}/>
        )}
        {isSignedIn && this.state.flicks && ( 
          <MovieContainer movies={this.state.flicks}/>
        )}
      </main>
    )
  }
}

export default App;
