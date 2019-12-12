import React from 'react';
import { shallow } from 'enzyme'
import { Login } from './Login';

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
    wrapper.instance().handleChange(mockEvent);

    expect(wrapper.state('name')).toEqual(expected);
    //Tried relocating let wrapper = shallow(<Login />) locally to each test to no avail
    //Wrapper continues to display as null (can't read handleChange of 'null')
    //Tried chaining the .dive() method to the shallow instance without luck, wrapper is still null
    //Tried to intialize then expectba new variable (let wrapper2 = shallow(<Login />)), which didn't work (still null)
    //Tried tweaking the shallow import syntax
    //Tried removing the initial snapshot test in case it was causing any contamination
    //SOLVED - sort of, I altered the Login import from (import Login to { Login} , but now the snapshot fails)
  });

  it('should run handleChange when the inputs are manipulated', () => {
    const mockEvent = { target: { name: 'name', value: 'foster'} };
    wrapper.instance().handleChange = jest.fn();
    // const mockEvent = { preventDefault: jest.fn() };

    wrapper.find('input').simulate('change', mockEvent);

    expect(wrapper.instance().handleChange).toHaveBeenCalledWith(mockEvent);
  });

  it('should invoke login upon button click', () => {
    const mockEvent = { preventDefault: jest.fn() };
    wrapper.instance().login = jest.fn();
    wrapper.instance().forceUpdate();

    wrapper.find('button').simulate('click', mockEvent);

    expect(wrapper.instance().login).toHaveBeenCalledWith(mockEvent);
  });

  // it('should reset state when validations pass for login', () => {
  //   const mockEvent = { preventDefault: jest.fn() };
  //     const originalState = {name: 'Tom', quote: 'Nah', ranking: 'Padawan', isSignedIn: false, errors: ''}
  //   const expected = { title: '', description: '' };
  //
  //   wrapper.instance().setState(originalState);
  //
  //   wrapper.instance().logIn();
  //
  //   expect(wrapper.state()).toEqual(expected);
  // });




});
