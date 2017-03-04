import React, { Component, PropTypes } from 'react';

import CSSModules from '../../../../utils/css-modules';

import styles from './Crement.scss';

@CSSModules(styles)
class Crement extends Component {
    static propTypes = {
        value: PropTypes.number.isRequired,
        min: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired,

        onIncrement: PropTypes.func.isRequired,
        onDecrement: PropTypes.func.isRequired,
    };

    render() {
        const {
            value,
            min,
            max,

            onIncrement,
            onDecrement,
        } = this.props;

        return (
            <section styleName="crement">
                <button
                        disabled={value === min}
                        onClick={onDecrement}>
                    -
                </button>

                <span styleName="value">{value}</span>

                <button
                        disabled={value === max}
                        onClick={onIncrement}>
                    +
                </button>
            </section>
        );
    }
}

export default Crement;