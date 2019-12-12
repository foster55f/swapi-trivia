import React from 'react';
import { shallow } from 'enzyme';
import MovieContainer from '../MovieContainer/MovieContainer';

describe('MovieContainer', () => {
    let wrapper;
    const mockSelect = jest.fn()
    beforeEach(() => {
        wrapper = shallow(<MovieContainer
            movies={[
                {
                    episode_id: 55,
                    title: 'Big Lebowski',
                    release_date: 1981
                },
                {
                    episode_id: 155,
                    title: 'Major League',
                    release_date: 2055
                }
            ]}
            user={{
                name: 'Foster',
                quote: 'Aim small miss small',
                ranking: 'Professional'
            }}
            select={mockSelect}
        />)
    })
    
  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
