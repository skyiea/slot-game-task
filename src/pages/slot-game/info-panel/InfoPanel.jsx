import React, { Component } from 'react';

import CSSModules from '../../../utils/css-modules';

import styles from './InfoPanel.scss';

@CSSModules(styles)
class InfoPanel extends Component {
    render() {
        const {
            // config,
            slotState,
        } = this.props;

        const {
            balance,
            gameRoundId,
            totalBet,
            totalWin,
        } = slotState;

        return (
            <section styleName="info-panel">
                <section styleName="line">
                    <label>Balance: </label>
                    <span>{balance}</span>
                </section>
                {
                    gameRoundId !== null &&
                        <section styleName="round-info">
                            <section styleName="line">
                                <label>Round Id:</label>
                                <span>{gameRoundId}</span>
                            </section>

                            <section styleName="line">
                                <label>Total Bet:</label>
                                <span>{totalBet}</span>
                            </section>

                            <section styleName="line">
                                <label>Total Win:</label>
                                <span>{totalWin}</span>
                            </section>
                        </section>
                }
            </section>
        );
    }
}

export default InfoPanel;