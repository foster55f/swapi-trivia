import React, { Component } from 'react';
import './App.css';
import MovieContainer from '../MovieContainer/MovieContainer';
import Login from '../Login/Login';
import {retrieveAllMovies} from '../../fetchCalls'


class App extends Component {
  constructor() {
    super();
    this.state = {
      flicks: [],
      user: {
        name: '',
        quote: '',
        ranking: ''
      }
    }
  }

  componentDidMount() {
    retrieveAllMovies('https://swapi.co/api/films/')
    .then(flicks => this.setState({flicks}))
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
          <Login enterUserInfo={this.enterUserInfo} />
          {/* <MovieContainer  flicks = {this.state.flicks}/> */}
          </div>
      </main>
    )
  }
}

export default App;
