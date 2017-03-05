import React from 'react';
import { shallow } from 'enzyme';

import fetchConfig from '../../actions/fetchConfig';
import resetSlotState from '../../actions/resetSlotState';

import initialState from '../../store/initialState';

import SlotGame from './SlotGame';

require.extensions['.scss'] = () => null;

function setup() {
    const props = {
        config: initialState.config,
        slotState: initialState.slotState,

        fetchConfig,
        resetSlotState
    };

    const enzymeWrapper = shallow(
        <SlotGame {...props}/>
    );

    return {
        props,
        enzymeWrapper
    };
}

describe('SlotGame Component', () => {
    it('should initially render self with loader screen while config is loading', () => {
        const { enzymeWrapper } = setup();

        expect(enzymeWrapper.text()).toBe('Initializing game..');
    });

    // ...
});