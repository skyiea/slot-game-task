import React, { Component } from 'react';

import CSSModules from '../../../utils/css-modules';

import styles from './ControlPanel.scss';

@CSSModules(styles)
class ControlPanel extends Component {
    state = {
        linesCount: 3
    };

    handleLinesCountChange(e) {
        this.setState({
            linesCount: e.target.value
        });
    }

    render() {
        const {
            // config,
            // slotState,

            spinSlots
        } = this.props;

        const {
            linesCount
        } = this.state;

        return (
            <section styleName="control-panel">
                <button onClick={spinSlots}>
                    Spin
                </button>

                <section styleName="lines-count">
                    <label>Lines count: </label>

                    <input
                            type="number"
                            min="1"
                            max="3"
                            value={linesCount}
                            onChange={::this.handleLinesCountChange}
                    />
                </section>
            </section>
        );
    }
}

export default ControlPanel;