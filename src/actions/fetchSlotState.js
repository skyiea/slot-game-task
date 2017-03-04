import TYPES from './actionTypes';

import genAction from '../utils/redux-helpers/genAction';
import STATUS from '../enums/requestStatus';
import * as slotAPI from '../utils/api/slotAPI';

const fetchSlotState = genAction(TYPES.FETCH_SLOT_STATE);

export default function () {
    return async function (dispatch) {
        dispatch(fetchSlotState(STATUS.request));

        let slotState;

        try {
            slotState = await slotAPI.fetchState();
        } catch (error) {
            dispatch(fetchSlotState(STATUS.failure), { error });
        }

        dispatch(fetchSlotState(STATUS.success, { slotState }));
    };
}