import axios from 'axios';

import TYPES from './actionTypes';

import genAction from '../utils/redux-helpers/genAction';
import STATUS from '../enums/requestStatus';

const fetchSlotState = genAction(TYPES.FETCH_SLOT_STATE);

export default function () {
    return async function (dispatch) {
        dispatch(fetchSlotState(STATUS.request));

        try {
            const response = await axios.get('http://demo-slot-server.herokuapp.com/slot/state');

            dispatch(fetchSlotState(STATUS.success, {
                slotState: response.data
            }));
        } catch (error) {
            dispatch(fetchSlotState(STATUS.failure), {
                error
            });
        }
    };
}