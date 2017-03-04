import TYPES from './actionTypes';

import genAction from '../utils/redux-helpers/genAction';
import STATUS from '../enums/requestStatus';
import * as slotAPI from '../utils/api/slotAPI';

const spinSlots = genAction(TYPES.SPIN_SLOTS);

export default function (lineBet, linesCount) {
    return async function (dispatch) {
        dispatch(spinSlots(STATUS.request));

        let slotState;

        try {
            slotState = await slotAPI.spin(lineBet, linesCount);
        } catch (error) {
            dispatch(spinSlots(STATUS.failure), { error });
        }

        dispatch(spinSlots(STATUS.success, { slotState }));
    };
}