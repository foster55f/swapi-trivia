import React, { Component } from 'react';
import { Route, Redirect, Router } from 'react-router-dom';
import './App.css';
import MovieContainer from '../MovieContainer/MovieContainer';
import CharacterContainer from '../CharacterContainer/CharacterContainer';
import Login from '../Login/Login';
import UserData from '../UserData/UserData';
import { retrieveAllMovies, retrieveAllCharacters,getCharacterData } from '../../fetchCalls';


class App extends Component {
  constructor() {
    super();
    this.state = {
      flicks: [],
      selectedFlick: {},
      selectedCharacters:[],
      isSignedIn: false,
      user: {},
    }
  }

  componentDidMount() {
    retrieveAllMovies('https://swapi.co/api/films/')
      .then(flicks => this.setState({ flicks }))
      console.log(this.state)
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
      isSignedIn: true,
    })
    console.log(Router)
    console.log(this.state.user)
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
        {!isSignedIn && (
          <Route exact path='/' render = {() => <Login enterUserInfo={this.enterUserInfo} />}/>
        )}
        {this.state.flicks && 
          // <Redirect to='/movies'/>
          <Route exact path='/movies' render={() => <MovieContainer movies={this.state.flicks} selectFlick={this.selectFlick} />}/>
        }
        {isSignedIn && this.state.flicks && (
          <UserData logOut={this.logOut} name={this.state.user.name} quote={this.state.user.quote} ranking={this.state.user.ranking}/>
        )}
        {this.state.selectedCharacters&&(
          <CharacterContainer selectedCharacters={this.state.selectedCharacters}/>)
        }
      </main>
    )
  }
}

export default App;
