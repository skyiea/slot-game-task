import React, { Component } from 'react';

import CSSModules from '../../../utils/css-modules';

import styles from './InfoPanel.scss';

@CSSModules(styles)
class InfoPanel extends Component {
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
                        {balance / config.coinValue}
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
                                <span>{totalBet}</span>
                            </section>

                            <section styleName="line">
                                <label>Total Win:</label>
                                <span>{totalWin}</span>
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