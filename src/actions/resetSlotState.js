import axios from 'axios';

import TYPES from './actionTypes';

import genAction from '../utils/redux-helpers/genAction';
import STATUS from '../enums/requestStatus';

const resetSlotState = genAction(TYPES.RESET_SLOT_STATE);

export default function () {
    return async function (dispatch) {
        dispatch(resetSlotState(STATUS.request));

        let response;

        try {
            response = await axios.get('http://demo-slot-server.herokuapp.com/slot/reset');
        } catch (error) {
            dispatch(resetSlotState(STATUS.failure), {
                error
            });
        }

        dispatch(resetSlotState(STATUS.success, {
            slotState: response.data
        }));
    };
}