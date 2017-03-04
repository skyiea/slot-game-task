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

            fetchConfig,
        } = this.props;

        const rootStyleName = 'slot-game-page';

        if (!config) {
            return (
                <section styleName={cn(rootStyleName, 'message', 'fetching')}>
                    Initializing game..
                </section>
            );
        }

        if (!slotState) {
            return (
                <section styleName={cn(rootStyleName, 'message', 'fetching')}>
                    Retrieving state..
                </section>
            );
        }

        if (config instanceof Error) {
            return (
                <section styleName={cn(rootStyleName, 'message', 'config-fetch-error')}>
                    Fetch config error

                    <button onClick={fetchConfig}>
                        Retry
                    </button>
                </section>
            );
        }

        if (slotState instanceof Error || slotState.errorCode !== null) {
            return (
                <section styleName={cn(rootStyleName, 'message', 'slot-state-error')}>
                    Error

                    <button onClick={() => document.location.reload()}>
                        Reload
                    </button>
                </section>
            );
        }

        return (
            <section styleName={cn(rootStyleName, 'game')}>
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