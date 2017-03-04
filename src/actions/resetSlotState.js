import TYPES from './actionTypes';

import genAction from '../utils/redux-helpers/genAction';
import STATUS from '../enums/requestStatus';
import * as slotAPI from '../utils/api/slotAPI';

const resetSlotState = genAction(TYPES.RESET_SLOT_STATE);

export default function () {
    return async function (dispatch) {
        dispatch(resetSlotState(STATUS.request));

        let slotState;

        try {
            slotState = await slotAPI.resetState();
        } catch (error) {
            dispatch(resetSlotState(STATUS.failure), { error });
        }

        dispatch(resetSlotState(STATUS.success, { slotState }));
    };
}