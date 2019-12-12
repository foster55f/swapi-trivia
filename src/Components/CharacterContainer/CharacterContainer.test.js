import React from 'react'
import { shallow } from 'enzyme'

import CharacterContainer from '../CharacterContainer/CharacterContainer';


describe('CharacterContainer', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<CharacterContainer
            characters={[
                {
                    films: ["Major League", "Shawshank"],
                    homeworld: "Big Lebowski",
                    name: "jim",
                    population: 100,
                    species: "Human"
                },
                {
                    films: ["Billy Madison", "Alien"],
                    homeworld: "Big Apple",
                    name: "foster",
                    population: 100,
                    species: "Human"
                }
            ]},
            adjustFavorites={jest.fn()}
            // user={{
            //     name: 'Foster',
            //     quote: 'Aim small miss small',
            //     ranking: 'Professional'
            // }}

        />)
    })
    it('should match the snapshot with all data passed in correctly', () => {
        expect(wrapper).toMatchSnapshot();
      });
})
