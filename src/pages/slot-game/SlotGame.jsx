import React, { Component } from 'react';
import cn from 'classnames';

import CSSModules from '../../utils/css-modules';

import Slots from './slots/SlotsContainer';
import ControlPanel from './control-panel/ControlPanelContainer';
import InfoPanel from './info-panel/InfoPanelContainer';

import styles from './SlotGame.scss';

@CSSModules(styles)
class SlotGame extends Component {
    componentWillMount() {
        const {
            config,

            fetchConfig,
            resetSlotState
        } = this.props;

        // initial open
        if (!config) {
            fetchConfig();
            resetSlotState();
        }
    }

    render() {
        const {
            config,
            slotState,
        } = this.props;

        const rootStyleName = 'slot-game-page';

        if (!config || !slotState) {
            return (
                <section styleName={cn(rootStyleName, 'loading')}>
                    Initializing game..
                </section>
            );
        }

        return (
            <section styleName={rootStyleName}>
                <section styleName="first-row">
                    <Slots/>
                    <InfoPanel/>
                </section>

                <ControlPanel/>
            </section>
        );
    }
}

export default SlotGame;