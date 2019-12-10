import React from 'react';
import { shallow } from enzyme

import UserData from '../UserData/UserData';


describe('UserData', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<CharacterCard
            name="Foster"
            quote="hello"
            ranking="first"
           
        />)
    })

    it.only('should match the snapshot with all data passed correctly', () => {
        expect(wrapper).toMatchSnapshot()
    })

});