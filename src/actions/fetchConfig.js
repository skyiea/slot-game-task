import TYPES from './actionTypes';

import genAction from '../utils/redux-helpers/genAction';
import STATUS from '../enums/requestStatus';
import * as slotAPI from '../utils/api/slotAPI';

const fetchConfig = genAction(TYPES.FETCH_CONFIG);

export default function () {
    return async function (dispatch) {
        dispatch(fetchConfig(STATUS.request));

        let config;

        try {
            config = await slotAPI.fetchConfig();
        } catch (error) {
            dispatch(fetchConfig(STATUS.failure), { error });
        }

        dispatch(fetchConfig(STATUS.success, { config }));
    };
}