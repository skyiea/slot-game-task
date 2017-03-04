import React, { Component } from 'react';
import cn from 'classnames';

import CSSModules from '../../../utils/css-modules';

import styles from './Slots.scss';

@CSSModules(styles)
class Slots extends Component {
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

    render() {
        const {
            // config,
            slotState,
        } = this.props;

        const {
            symbols: rows,
        } = slotState;

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
                                    const checked = checkedCells.some(({ row, reel }) =>
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