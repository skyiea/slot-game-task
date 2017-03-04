import TYPES from './actionTypes';

import STATUS from '../enums/requestStatus';

import genAction from '../utils/redux-helpers/genAction';
import * as slotAPI from '../utils/api/slotAPI';

const spinSlots = genAction(TYPES.SPIN_SLOTS);

export default function (lineBet, linesCount) {
    return async function (dispatch) {
        dispatch(spinSlots(STATUS.request));

        try {
            const slotState = await slotAPI.spin(lineBet, linesCount);

            dispatch(spinSlots(STATUS.success, { slotState }));
        } catch (error) {
            dispatch(spinSlots(STATUS.failure), { error });
        }
    };
}