import React from 'react';
import { shallow } from 'enzyme';
import MovieCard from '../MovieCard/MovieCard';

describe('Card', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<MovieCard
      title="Bananas"
      number="B A N A N A S"
      releaseDate={3}
    />);

    expect(wrapper).toMatchSnapshot();
  });
});