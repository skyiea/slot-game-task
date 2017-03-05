import React, { Component, PropTypes } from 'react';

import CSSModules from '../../../utils/css-modules';

import styles from './InfoPanel.scss';

@CSSModules(styles)
class InfoPanel extends Component {
    static propTypes = {
        config          : PropTypes.object.isRequired,
        slotState       : PropTypes.object.isRequired,
        spinInProgress  : PropTypes.bool.isRequired,
    };

    render() {
        const {
            config,
            slotState,
            spinInProgress,
        } = this.props;

        const {
            balance,
            gameRoundId,
            totalBet,
            totalWin,
        } = slotState;

        return (
            <section styleName="info-panel">
                <section styleName="line balance">
                    <label>Balance: </label>

                    <span styleName={balance === 0 && 'empty'}>
                        {balance}
                    </span>
                </section>
                {
                    !spinInProgress && gameRoundId !== null &&
                        <section styleName="round-info">
                            <section styleName="line">
                                <label>Round Id:</label>
                                <span>{gameRoundId}</span>
                            </section>

                            <section styleName="line">
                                <label>Total Bet:</label>
                                <span>{totalBet * config.coinValue}</span>
                            </section>

                            <section styleName="line">
                                <label>Total Win:</label>
                                <span>{totalWin * config.coinValue}</span>
                            </section>
                        </section>
                }
                {
                    !spinInProgress && !!totalWin &&
                        <section styleName="line victory">
                            You won!
                        </section>
                }
                {
                    spinInProgress &&
                        <section styleName="line loading">
                            Spin in progress..
                        </section>
                }
            </section>
        );
    }
}

export default InfoPanel;