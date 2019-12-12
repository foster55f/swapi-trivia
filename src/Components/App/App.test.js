import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import { retrieveAllMovies } from '../../fetchCalls';

jest.mock('../../fetchCalls.js')

describe('App', () => {
  beforeEach(() => {
    retrieveAllMovies.mockImplementation(() => {
      return Promise.resolve([{}, {}, {}])
    });
  });

  it('should match the snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot()
  });

  it('should invoke retrieveAllMovies() after componentDidMount triggers', () => {
    shallow(<App />);
    expect(retrieveAllMovies).toHaveBeenCalled();
    //Imports are solid, syntax is fine, why won't this invoke in the test?
    // shallow should trigger componentDidMount which invokes retrieveAllMovies?
    //I've tried declaring const retrieveAllMovies = jest.fn.mockimpl() as an alternative with no dice
    //File pathway isn't the problem. I'm not sure how to resolve the issue
    //I've tried breaking the test into a nested described('componentDidMount' ...), but that didn't work
  });
});

{/*
describe('getIdeas', () => {
  let mockResponse = [
    {
      id: 1,
      title: "Sweaters for pugs",
      description: "To keep them warm"
    }
  ];
});

*/}
