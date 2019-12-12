import React from 'react';
import { App } from './App';
import { shallow } from 'enzyme';
import { retrieveAllMovies } from '../../fetchCalls';

jest.mock('../../fetchCalls.js')

describe('App', () => {
    beforeEach(() => {
      retrieveAllMovies.mockImplementation(() => {
        return Promise.resolve([{movie1: 'name'}, {movie2: 'name'}, {movie3: 'name'}])
      });
    });

    it('should match the snapshot', () => {
      const wrapper = shallow(<App />);
      expect(wrapper).toMatchSnapshot()
    });

    it('should invoke retrieveAllMovies after componentDidMount triggers', () => {
      shallow(<App />);
      expect(retrieveAllMovies).toHaveBeenCalled();
    });

    it('should update state when enterUserInfo is called', () => {
      const wrapper = shallow(<App />);
      const mockUserData = {name: 'Billy Madison', quote: 'Odoyle juuls', ranking: 'Padawan'};
      const expected = {name: 'Billy Madison', quote: 'Odoyle juuls', ranking: 'Padawan'};
      expect(wrapper.state('user')).toEqual({});

      wrapper.instance().enterUserInfo(mockUserData);

      expect(wrapper.state('user')).toEqual(expected);
    });

    it('should update state when logOut is called', () => {
      const wrapper = shallow(<App />);
      const mockUserData = {name: 'Billy Madison', quote: 'Odoyle juuls', ranking: 'Padawan'};
      wrapper.instance().setState({user: mockUserData});

      wrapper.instance().logOut();

      expect(wrapper.state()).toEqual(
                  {
                    favoritedCharacters: [],
                    favoritesCounter: 0,
                    flicks: [],
                    openingCrawl:null,
                    selectedCharacters: [],
                    selectedFlick: {},
                    user: {
                      name: "",
                      quote: "",
                      ranking: "",
                    }
                  });
    });

    it('should update state when selectFlick is called', () => {
      const wrapper = shallow(<App />);
      wrapper.instance().findCharacters = jest.fn();
      wrapper.instance().setState(
                {
                  favoritedCharacters: [],
                  favoritesCounter: 0,
                  flicks: [{episode_id: 1}, {episode_id: 3}, {episode_id : 2}],
                  openingCrawl: 2,
                  selectedCharacters: [],
                  selectedFlick: {},
                  user: {
                    name: "",
                    quote: "",
                    ranking: "",
                  }
                }
              );

      wrapper.instance().selectFlick(2);

      expect(wrapper.state()).toEqual(
                {
                  favoritedCharacters: [],
                  favoritesCounter: 0,
                  flicks: [{episode_id: 1}, {episode_id: 3}, {episode_id: 2}],
                  openingCrawl: undefined,
                  selectedCharacters: [],
                  selectedFlick: {episode_id: 3},
                  user: {name: "", quote: "", ranking: ""}
                });
    });
});
