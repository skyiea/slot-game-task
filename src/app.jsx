import 'babel-polyfill';
import 'babel-regenerator-runtime';

import React from 'react';
import ReactDOM from 'react-dom';
import {
    Router,
    Route,
    IndexRoute,
    browserHistory,
} from 'react-router';

import { Provider } from 'react-redux';

import createStore from './store/createStore';

import App from './components/app-root/AppContainer';
import SlotGame from './pages/slot-game/SlotGameContainer';
import About from './pages/about/AboutContainer';
import PageNotFound from './pages/page-not-found/PageNotFoundContainer';

import './app.scss';

const store = createStore();

ReactDOM.render((
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <Route path="slot-game" component={SlotGame}/>
                <Route path="about" component={About}/>
                <IndexRoute component={SlotGame}/>
                <Route path="*" component={PageNotFound}/>
            </Route>
        </Router>
    </Provider>
), document.querySelector('main'));