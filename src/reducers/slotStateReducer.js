import STATUS from '../enums/requestStatus';
import TYPES from '../actions/actionTypes';

function reducer(state, action) {
    const {
        type,
        status,
        payload
    } = action;

    switch (type) {
        case TYPES.RESET_SLOT_STATE: {
            let newSlotState;

            switch (status) {
                case STATUS.request:
                    newSlotState = null;

                    break;
                case STATUS.success:
                    newSlotState = payload.slotState;

                    break;
                default:
            }

            return newSlotState;
        }
        case TYPES.FETCH_SLOT_STATE: {
            let newSlotState;

            switch (status) {
                case STATUS.request:
                    newSlotState = null;

                    break;
                case STATUS.success:
                    newSlotState = payload.slotState;

                    break;
                default:
            }

            return newSlotState;
        }
        case TYPES.SPIN_SLOTS:
            switch (status) {
                case STATUS.success:
                    return payload.slotState;
                default:
            }

            break;
        default:
    }

    return state;
}

export default reducer;