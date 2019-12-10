import React, { Component } from 'react';
import { Route, withRouter} from 'react-router-dom';
import './App.css';
import MovieContainer from '../MovieContainer/MovieContainer';
import CharacterContainer from '../CharacterContainer/CharacterContainer';
import Login from '../Login/Login';
import UserData from '../UserData/UserData';
import ScrollingText from '../ScrollingText/ScrollingText';
import FavoritesContainer from '../FavoritesContainer/FavoritesContainer';
import { retrieveAllMovies, retrieveAllCharacters } from '../../fetchCalls';


export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      flicks: [],
      selectedFlick: {},
      selectedCharacters: [],
      openingCrawl:null,
      user: {},
      favoritedCharacters: [],
      favoritesCounter: 0
    }
  }

  componentDidMount() {
    retrieveAllMovies('https://swapi.co/api/films/')
      .then(flicks => this.setState({ flicks }))
  }

  selectFlick = (id) => {
    let correctCrawl = this.state.flicks.find(flick => {
      return flick.episode_id === parseInt(id)
    })
    this.props.history.push(`/movies:${id}`)
    this.setState({ selectedFlick: this.state.flicks[id - 1], openingCrawl: correctCrawl.opening_crawl})
    this.findCharacters(this.state.flicks[id - 1].characters)
  }

  findCharacters(characters) {
    retrieveAllCharacters(characters.slice(0,10))
      .then(response => this.setState({ selectedCharacters: response }))
      .then(()=> this.forceUpdate())
  }

  enterUserInfo = (userData) => {
    this.setState({
      user: { ...userData },
    })
  }

  logOut = () => {
    this.props.history.push('/')
    this.setState({
      user: {
        name: '',
        quote: '',
        ranking: ''
      },
    })
  }

  goToFavorites = () => {
    this.props.history.push(`/movies/favorites`)
  }

  adjustFavorites = (selectedCharacterData) => {
    let faveCharacterNames = this.state.favoritedCharacters.map(character => {
      return character.name
    });

    if (faveCharacterNames.includes(selectedCharacterData.name)) {
      let reducedFavoritesList = this.state.favoritedCharacters.filter(character => {
        return character.name !== selectedCharacterData.name
      });

      this.setState({favoritedCharacters: reducedFavoritesList, favoritesCounter: this.state.favoritesCounter - 1})


    } else if (!faveCharacterNames.includes(selectedCharacterData.name)) {
      this.setState({favoritedCharacters: [...this.state.favoritedCharacters, selectedCharacterData], favoritesCounter: this.state.favoritesCounter + 1})
    }
  }

  render() {

      return (
        <main>
          <Route exact path='/' render={() => <Login enterUserInfo={this.enterUserInfo} />} />
          <Route exact path='/movies' render={() => <MovieContainer movies={this.state.flicks} selectFlick={this.selectFlick} />} />
          <Route exact path='/movies' render={() => <UserData logOut={this.logOut} name={this.state.user.name} quote={this.state.user.quote} ranking={this.state.user.ranking} />} />
          <Route exact path='/movies:id' render={() => <UserData logOut={this.logOut} name={this.state.user.name} quote={this.state.user.quote} ranking={this.state.user.ranking} favoritesCounter={this.state.favoritesCounter} goToFavorites={this.goToFavorites}/>} />
          <Route exact path='/movies/favorites' render={() => <UserData logOut={this.logOut} name={this.state.user.name} quote={this.state.user.quote} ranking={this.state.user.ranking} favoritesCounter={this.state.favoritesCounter} goToFavorites={this.goToFavorites}/>} />
          <Route exact path='/movies:id' render={() => <CharacterContainer name={this.state.user.name} quote={this.state.user.quote} ranking={this.state.user.ranking}selectedCharacters={this.state.selectedCharacters} adjustFavorites={this.adjustFavorites} />} />
          <Route exact path='/movies:id' render={() => <ScrollingText crawl={this.state.openingCrawl}/>} />
          <Route exact path='/movies/favorites' render={() => <FavoritesContainer favoritedCharacters={this.state.favoritedCharacters}/>} />

        </main>
      )
  }
}

export default withRouter(App)
