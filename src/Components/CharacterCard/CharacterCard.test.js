import React from 'react'
import { shallow } from 'enzyme'

import CharacterCard from '../CharacterCard/CharacterCard';


describe('CharacterCard', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<CharacterCard
            name="Foster"
            films="Major League"
            homeworld="Big Apple"
            population="55555"
            species="Alien"
        />)
    })

    it('should match the snapshot with all data passed correctly', () => {
        expect(wrapper).toMatchSnapshot()
    })

});
