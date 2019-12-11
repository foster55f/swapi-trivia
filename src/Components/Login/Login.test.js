import React from 'react';
import { shallow } from 'enzyme'
import Login from './Login';

describe('Login', () => {
  let wrapper

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
  });
});