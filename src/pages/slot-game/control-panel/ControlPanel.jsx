import React, { Component, PropTypes } from 'react';

import CSSModules from '../../../utils/css-modules';
import LINES_COUNT from '../../../constants/linesCount';

import Crement from '../../../components/crement/Crement';

import styles from './ControlPanel.scss';

@CSSModules(styles)
class ControlPanel extends Component {
    static propTypes = {
        config          : PropTypes.object.isRequired,
        slotState       : PropTypes.object.isRequired,
        spinInProgress  : PropTypes.bool.isRequired,
        lineBet         : PropTypes.number.isRequired,
        linesCount      : PropTypes.number.isRequired,

        spinSlots           : PropTypes.func.isRequired,
        incrementLinesCount : PropTypes.func.isRequired,
        decrementLinesCount : PropTypes.func.isRequired,
        incrementLineBet    : PropTypes.func.isRequired,
        decrementLineBet    : PropTypes.func.isRequired,
    };

    render() {
        const {
            config,
            slotState,
            spinInProgress,
            lineBet,
            linesCount,

            spinSlots,
            incrementLinesCount,
            decrementLinesCount,
            incrementLineBet,
            decrementLineBet,
        } = this.props;

        const notEnoughBalance = slotState.balance < linesCount * lineBet;
        const spinBtnDisabled = spinInProgress || notEnoughBalance;

        return (
            <section styleName="control-panel">
                <section styleName="line">
                    <label>Line bet: </label>

                    <Crement
                            min={config.minCoins}
                            max={config.maxCoins}
                            value={lineBet}
                            onIncrement={incrementLineBet}
                            onDecrement={decrementLineBet}
                    />
                </section>

                <section styleName="line">
                    <label>Lines to bet: </label>

                    <Crement
                            min={LINES_COUNT.min}
                            max={LINES_COUNT.max}
                            value={linesCount}
                            onIncrement={incrementLinesCount}
                            onDecrement={decrementLinesCount}
                    />
                </section>

                <section styleName="line spin">
                    <button
                            disabled={spinBtnDisabled}
                            onClick={() => spinSlots(lineBet / config.coinValue, linesCount)}>
                        Spin
                    </button>
                    {
                        notEnoughBalance &&
                            <span styleName="warning">Not enough coins!</span>
                    }
                </section>
            </section>
        );
    }
}

export default ControlPanel;