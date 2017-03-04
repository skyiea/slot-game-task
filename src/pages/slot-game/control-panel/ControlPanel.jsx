import React, { Component } from 'react';

import CSSModules from '../../../utils/css-modules';
import {
    LINE_BET,
    LINES_COUNT
} from '../../../utils/constants';

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

                    <button
                            disabled={lineBet === LINE_BET.min}
                            onClick={decrementLineBet}>
                        -
                    </button>

                    <span styleName="option">{lineBet}</span>

                    <button
                            disabled={lineBet === LINE_BET.max}
                            onClick={incrementLineBet}>
                        +
                    </button>
                </section>

                <section styleName="line">
                    <label>Lines to bet: </label>

                    <button
                            disabled={linesCount === LINES_COUNT.min}
                            onClick={decrementLinesCount}>
                        -
                    </button>

                    <span styleName="option">{linesCount}</span>

                    <button
                            disabled={linesCount === LINES_COUNT.max}
                            onClick={incrementLinesCount}>
                        +
                    </button>
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