import axios from 'axios';

import TYPES from './actionTypes';

import genAction from '../utils/redux-helpers/genAction';
import STATUS from '../enums/requestStatus';

const resetSlotState = genAction(TYPES.RESET_SLOT_STATE);

export default function () {
    return async function (dispatch) {
        dispatch(resetSlotState(STATUS.request));

        try {
            const response = await axios.get('http://demo-slot-server.herokuapp.com/slot/reset');

            dispatch(resetSlotState(STATUS.success, {
                slotState: response.data
            }));
        } catch (error) {
            dispatch(resetSlotState(STATUS.failure), {
                error
            });
        }
    };
}