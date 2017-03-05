import TYPES from '../constants/actionTypes';
import STATUS from '../constants/requestStatus';

import genAction from '../utils/redux-helpers/genAction';
import * as slotAPI from '../utils/api/slotAPI';

const spinSlots = genAction(TYPES.SPIN_SLOTS);

// in order to enforce visual "tousling" effect when request come too quick
// forced delay can be used
const forceDelay = true;
const MIN_RESPONSE_DELAY = 500;

export default function (lineBet, linesCount) {
    return async function (dispatch) {
        dispatch(spinSlots(STATUS.request));

        try {
            const startTime = Date.now();
            const slotState = await slotAPI.spin(lineBet, linesCount);

            if (forceDelay) {
                const forceDelayTime = Math.max(0, MIN_RESPONSE_DELAY - (Date.now() - startTime));

                setTimeout(() => {
                    dispatch(spinSlots(STATUS.success, { slotState }));
                }, forceDelayTime);
            } else {
                dispatch(spinSlots(STATUS.success, { slotState }));
            }
        } catch (error) {
            dispatch(spinSlots(STATUS.failure, { error }));
        }
    };
}