import TYPES from './actionTypes';

import STATUS from '../enums/requestStatus';

import genAction from '../utils/redux-helpers/genAction';
import * as slotAPI from '../utils/api/slotAPI';

const fetchSlotState = genAction(TYPES.FETCH_SLOT_STATE);

export default function () {
    return async function (dispatch) {
        dispatch(fetchSlotState(STATUS.request));

        try {
            const slotState = await slotAPI.fetchState();

            dispatch(fetchSlotState(STATUS.success, { slotState }));
        } catch (error) {
            dispatch(fetchSlotState(STATUS.failure), { error });
        }
    };
}