import React from 'react';
import { shallow } from 'enzyme';
import ScrollingText from '../ScrollingText/ScrollingText';

describe('ScrollingText', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<ScrollingText
      crawl={'text'}
    />);

    expect(wrapper).toMatchSnapshot();
  });
});
