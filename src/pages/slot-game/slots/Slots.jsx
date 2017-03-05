import React, { Component } from 'react';
import cn from 'classnames';

import CSSModules from '../../../utils/css-modules';
import randomInteger from '../../../utils/randomInteger';

import styles from './Slots.scss';

const TOUSLING_INTERVAL = 100;

@CSSModules(styles)
class Slots extends Component {
    state = {
        fakeSymbols: []
    };

    passiveState = {
        touslingIntervalHandler: null,
    };

    getCheckedCells() {
        const {
            config,
            slotState,
        } = this.props;

        const {
            lineResults
        } = slotState;

        const {
            lines
        } = config;

        const checkedCells = [];

        for (const { lineId, win } of lineResults) {
            if (win !== 0) {
                const line = lines.find((item) => item.id === lineId);

                checkedCells.push(...line.cells);
            }
        }

        return checkedCells;
    }

    getRandomSymbols() {
        const {
            config
        } = this.props;

        const {
            rows,
            reels
        } = config;

        const A_CHAR_CODE = 65;
        const source    = Array(rows).fill(0).map((value, index) => String.fromCharCode(A_CHAR_CODE + index));
        const random1D  = Array(rows * reels).fill(0).map(() => source[randomInteger(0, rows - 1)]);
        const random2D = [];

        while (random1D.length) {
            random2D.push(random1D.splice(0, config.rows));
        }

        return random2D;
    }

    startTousling() {
        if (this.passiveState.touslingIntervalHandler !== null) {
            this.stopTousling();
        }

        const updateFakeSymbols = () => {
            this.setState({
                fakeSymbols: this.getRandomSymbols()
            });
        };

        updateFakeSymbols();
        this.passiveState.touslingIntervalHandler = window.setInterval(updateFakeSymbols, TOUSLING_INTERVAL);
    }

    stopTousling() {
        window.clearInterval(this.passiveState.touslingIntervalHandler);
        this.passiveState.touslingIntervalHandler = null;
    }

    componentWillReceiveProps(nextProps) {
        const {
            spinInProgress: oldSpinInProgress
        } = this.props;

        const {
            spinInProgress: newSpinInProgress
        } = nextProps;

        if (oldSpinInProgress !== newSpinInProgress) {
            if (newSpinInProgress) {
                this.startTousling();
            } else {
                this.stopTousling();

                this.setState({
                    fakeSymbols: []
                });
            }
        }
    }

    render() {
        const {
            slotState,
            spinInProgress,
        } = this.props;

        const {
            fakeSymbols
        } = this.state;

        const {
            symbols,
        } = slotState;

        const rows = spinInProgress ? fakeSymbols : symbols;

        const checkedCells = this.getCheckedCells();

        return (
            <section styleName="slots">
                {
                    rows.map((row, rowIndex) => (
                        <section
                                key={rowIndex}
                                styleName="row">
                            {
                                row.map((cell, cellIndex) => {
                                    const checked = !spinInProgress && checkedCells.some(({ row, reel }) =>
                                        row === rowIndex && reel === cellIndex);

                                    return (
                                        <section
                                                key={`${rowIndex}:${cellIndex}`}
                                                styleName={cn('cell', { checked })}>
                                            {cell}
                                        </section>
                                    );
                                })
                            }
                        </section>
                    ))
                }
            </section>
        );
    }
}

export default Slots;