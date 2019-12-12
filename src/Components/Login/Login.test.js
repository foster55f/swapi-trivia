import React from 'react';
import { shallow } from 'enzyme'
import Login from './Login';

describe('Login', () => {
  let wrapper;

    beforeEach(() => {
    wrapper = shallow(<Login />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state when handleChange is called', () => {
    const mockEvent = { target: { name: 'name', value: 'foster'} };
    const expected = 'foster';
    let wrapper2 = shallow(<Login />);
    wrapper2.instance().handleChange(mockEvent);

    expect(wrapper2.state('name')).toEqual(expected);
    //Tried relocating let wrapper = shallow(<Login />) locally to each test to no avail
    //Wrapper continues to display as null (can't read handleChange of 'null')
    //Tried chaining the .dive() method to the shallow instance without luck, wrapper is still null
    //Tried to intialize then expectba new variable (let wrapper2 = shallow(<Login />)), which didn't work (still null)
    //Tried tweaking the shallow import syntax
    //Tried removing the initial snapshot test in case it was causing any contamination
  });
});
