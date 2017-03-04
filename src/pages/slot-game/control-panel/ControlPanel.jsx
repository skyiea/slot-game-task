import React, { Component } from 'react';

import CSSModules from '../../../utils/css-modules';
import {
    LINE_BET,
    LINES_COUNT
} from '../../../utils/constants';

import Crement from './crement/Crement';

import styles from './ControlPanel.scss';

@CSSModules(styles)
class ControlPanel extends Component {
    render() {
        const {
            config,
            spinInProgress,
            lineBet,
            linesCount,

            spinSlots,
            incrementLinesCount,
            decrementLinesCount,
            incrementLineBet,
            decrementLineBet,
        } = this.props;

        return (
            <section styleName="control-panel">
                <section styleName="line">
                    <label>Line bet: </label>

                    <Crement
                            min={LINE_BET.min}
                            max={LINE_BET.max}
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

                <section styleName="line">
                    <button
                            disabled={spinInProgress}
                            onClick={() => spinSlots(lineBet / config.coinValue, linesCount)}>
                        Spin
                    </button>
                </section>
            </section>
        );
    }
}

export default ControlPanel;