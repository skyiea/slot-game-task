import TYPES from '../constants/actionTypes';
import STATUS from '../constants/requestStatus';

import genAction from '../utils/redux-helpers/genAction';
import * as slotAPI from '../utils/api/slotAPI';

const resetSlotState = genAction(TYPES.RESET_SLOT_STATE);

export default function () {
    return async function (dispatch) {
        dispatch(resetSlotState(STATUS.request));

        try {
            const slotState = await slotAPI.resetState();

            dispatch(resetSlotState(STATUS.success, { slotState }));
        } catch (error) {
            dispatch(resetSlotState(STATUS.failure, { error }));
        }
    };
}