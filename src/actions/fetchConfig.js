import TYPES from './actionTypes';

import STATUS from '../enums/requestStatus';

import genAction from '../utils/redux-helpers/genAction';
import * as slotAPI from '../utils/api/slotAPI';

const fetchConfig = genAction(TYPES.FETCH_CONFIG);

export default function () {
    return async function (dispatch) {
        dispatch(fetchConfig(STATUS.request));

        try {
            const config = await slotAPI.fetchConfig();

            dispatch(fetchConfig(STATUS.success, { config }));
        } catch (error) {
            dispatch(fetchConfig(STATUS.failure), { error });
        }
    };
}