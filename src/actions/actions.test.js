import configureMockStore from 'redux-mock-store';
import nock from 'nock';
import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';
import thunkMiddleware from 'redux-thunk';

import fetchConfig from './fetchConfig';
import * as BetActions from './BetActions';
import TYPES from '../constants/actionTypes';
import STATUS from '../constants/requestStatus';
import { API_BASE } from '../utils/api/slotAPI';

// that's necessary in order to make axios and nock work together
axios.defaults.host = API_BASE;
axios.defaults.adapter = httpAdapter;

const middlewares = [ thunkMiddleware ];
const mockStore = configureMockStore(middlewares);

describe('sync actions', () => {
    it('should create an action to increment lines count', () => {
        const expectedAction = {
            type: TYPES.LINES_COUNT_INCREMENT
        };

        expect(BetActions.incrementLinesCount()).toEqual(expectedAction);
    });

    // ...
});

describe('async actions', () => {
    afterEach(() => {
        nock.cleanAll()
    });

    it('should dispatch FETCH_CONFIG with success status when config has beed fetched', () => {
        const mockedConfig = {
            coinValue: 0.10
        };

        nock(API_BASE)
            .get('/config')
            .reply(200, mockedConfig);

        const expectedActions = [
            {
                type: TYPES.FETCH_CONFIG,
                status: STATUS.request,
                payload: {}
            },
            {
                type: TYPES.FETCH_CONFIG,
                status: STATUS.success,
                payload: {
                    config: mockedConfig
                }
            }
        ];

        const store = mockStore({
            config: null
        });

        return store.dispatch(fetchConfig()).
            then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
    });

    // ...
});