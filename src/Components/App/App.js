import React, { Component } from 'react';
import { Route, Redirect, Router } from 'react-router-dom';
import './App.css';
import MovieContainer from '../MovieContainer/MovieContainer';
import CharacterContainer from '../CharacterContainer/CharacterContainer';
import Login from '../Login/Login';
import UserData from '../UserData/UserData';
import ScrollingText from '../ScrollingText/ScrollingText';
import { retrieveAllMovies, retrieveAllCharacters, getCharacterData } from '../../fetchCalls';


class App extends Component {
  constructor() {
    super();
    this.state = {
      flicks: [],
      selectedFlick: {},
      selectedCharacters:[],
      user: {},
    }
  }

  componentDidMount() {
    retrieveAllMovies('https://swapi.co/api/films/')
      .then(flicks => this.setState({ flicks }))
  }

  selectFlick = (id) => {
    console.log(id)
    this.setState({selectedFlick: this.state.flicks[id-1]})
    this.findCharacters(this.state.flicks[id-1].characters)
  }

  findCharacters(characters) {
    retrieveAllCharacters(characters.slice(0,10))
      .then(response => this.setState({ selectedCharacters: response }))
      .then(()=> this.forceUpdate())
    console.log(this.state.selectedCharacters)
  }

  enterUserInfo = (userData) => {
    this.setState({
      user: { ...userData },
    })
    console.log(this.props)
  }

  logOut = () => {
    this.setState({
      user: {
        name: '',
        quote: '',
        ranking: ''
      },
      isSignedIn: false
    })
  }

  render() {
    const { isSignedIn } = this.state
      return (
        <main>
          <Route exact path='/' render={() => <Login enterUserInfo={this.enterUserInfo} />} />

          <Route exact path='/movies' render={() => <MovieContainer movies={this.state.flicks} selectFlick={this.selectFlick} />} />


          <Route exact path='/movies' render={() => <UserData logOut={this.logOut} name={this.state.user.name} quote={this.state.user.quote} ranking={this.state.user.ranking}/>} />

          {/*

           } {this.state.selectedCharacters&&(
            <CharacterContainer selectedCharacters={this.state.selectedCharacters}/>)
          }
          <ScrollingText />

          */}

        </main>
    )
  }
}

export default App;
