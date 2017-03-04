import React, { Component } from 'react';

import CSSModules from '../../../utils/css-modules';

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
                            disabled={lineBet === 3}
                            onClick={decrementLineBet}>
                        -
                    </button>

                    <span styleName="option">{lineBet}</span>

                    <button
                            disabled={lineBet === 10}
                            onClick={incrementLineBet}>
                        +
                    </button>
                </section>

                <section styleName="line">
                    <label>Lines to bet: </label>

                    <button
                            disabled={linesCount === 1}
                            onClick={decrementLinesCount}>
                        -
                    </button>

                    <span styleName="option">{linesCount}</span>

                    <button
                            disabled={linesCount === 3}
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