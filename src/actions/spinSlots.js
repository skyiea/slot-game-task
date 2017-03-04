import axios from 'axios';

import TYPES from './actionTypes';

import genAction from '../utils/redux-helpers/genAction';
import STATUS from '../enums/requestStatus';

const spinSlots = genAction(TYPES.SPIN_SLOTS);

export default function () {
    return async function (dispatch) {
        dispatch(spinSlots(STATUS.request));

        try {
            const response = await axios.get('http://demo-slot-server.herokuapp.com/slot/spin?lineBet=100&linesCount=3');

            dispatch(spinSlots(STATUS.success, {
                slotState: response.data
            }));
        } catch (error) {
            dispatch(spinSlots(STATUS.failure), {
                error
            });
        }
    };
}