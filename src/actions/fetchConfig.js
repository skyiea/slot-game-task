import axios from 'axios';

import TYPES from './actionTypes';

import genAction from '../utils/redux-helpers/genAction';
import STATUS from '../enums/requestStatus';

const fetchConfig = genAction(TYPES.FETCH_CONFIG);

export default function () {
    return async function (dispatch) {
        dispatch(fetchConfig(STATUS.request));

        try {
            const response = await axios.get('http://demo-slot-server.herokuapp.com/slot/config');

            dispatch(fetchConfig(STATUS.success, {
                config: response.data
            }));
        } catch (error) {
            dispatch(fetchConfig(STATUS.failure), {
                error
            });
        }
    };
}