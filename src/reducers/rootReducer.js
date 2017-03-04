import STATUS from '../enums/requestStatus';
import TYPES from '../actions/actionTypes';

function rootReducer(state, action) {
    const {
        type,
        status,
        payload
    } = action;

    switch (type) {
        case TYPES.FETCH_CONFIG: {
            let newConfig;

            switch (status) {
                case STATUS.request:
                    newConfig = null;

                    break;
                case STATUS.success:
                    newConfig = payload.config;

                    break;
                default:
            }

            return {
                ...state,
                config: newConfig
            };
        }
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

            return {
                ...state,
                slotState: newSlotState
            };
        }
        case TYPES.SPIN_SLOTS:
            switch (status) {
                case STATUS.success:
                    return {
                        ...state,
                        slotState: payload.slotState
                    };
                default:
            }

            break;
        default:
    }

    return state;
}

export default rootReducer;