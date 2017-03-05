import STATUS from '../constants/requestStatus';
import TYPES from '../constants/actionTypes';

function reducer(state, action) {
    const {
        type,
        status,
        payload
    } = action;

    switch (type) {
        case TYPES.RESET_SLOT_STATE:
        case TYPES.FETCH_SLOT_STATE:
            switch (status) {
                case STATUS.request:
                    return null;
                case STATUS.failure:
                    return new Error();
                case STATUS.success:
                    return payload.slotState;
                default:
            }

            break;
        case TYPES.SPIN_SLOTS:
            switch (status) {
                case STATUS.failure:
                    return new Error();
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