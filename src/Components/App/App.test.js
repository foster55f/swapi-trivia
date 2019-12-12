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
    //Imports are solid, syntax is fine, but this still invoke in the test (0 invokes)?
    //Shallow should trigger componentDidMount which invokes retrieveAllMovies
    //I've tried declaring const retrieveAllMovies = jest.fn.mockimpl() as an alternative with no dice
    //File pathway isn't the problem
    //I've tried writing the jest.mock(url with and without the .js suffix)
    //Jest dependency IS installed; the snapshot test works
    //I've tried breaking the test into a nested described('componentDidMount' ...), but that didn't work
    //I tried to first manually invoke componentDidMount (wrapper.instance().componentDidMount();)
    //Tried playing with async / await in strange ways
    //Could it have something to do with our class syntax in App.js (App extends React.Component instead of Component)?


    it('should update state when enterUserInfo is called', () => {
      const wrapper = shallow(<App />);
      const mockUserData = {name: 'Billy Madison', quote: 'Odoyle juuls', ranking: 'Padawan'};
      const expected = {name: 'Billy Madison', quote: 'Odoyle juuls', ranking: 'Padawan'};
        // wrapper.instance().enterUserInfo = jest.fn();
        // wrapper.instance().forceUpdate();
      expect(wrapper.state('user')).toEqual({});

      wrapper.instance().enterUserInfo(mockUserData);

      expect(wrapper.state('user')).toEqual(expected);
    });
    //Test won't register App as a class component (error message: ShallowWrapper::state() can only be called on class components)
    //Tried various unsuccessful tweaks - is there some global issue with the App file? Import syntax?
    //SOLVED - import syntax




});
