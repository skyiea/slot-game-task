import React, { Component } from 'react';
import { Link } from 'react-router';

import CSSModules from '../../utils/css-modules';

import styles from './App.scss';

@CSSModules(styles)
class App extends Component {
    render() {
        const {
            location,

            children
        } = this.props;

        return (
            <section styleName="app">
                <nav>
                    <Link
                            styleName={[ '/', '/slot-game' ].indexOf(location.pathname) !== -1 && 'active'}
                            to="/slot-game">
                        Slot Game
                    </Link>

                    <Link
                            styleName={location.pathname === '/about' && 'active'}
                            to="/about">
                        About
                    </Link>
                </nav>

                <section styleName="page">
                    {children}
                </section>
            </section>
        );
    }
}

export default App;