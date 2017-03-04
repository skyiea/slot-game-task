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

            return {
                ...state,
                slotState: newSlotState
            };
        }
        case TYPES.SPIN_SLOTS:
            switch (status) {
                case STATUS.request:
                    return {
                        ...state,
                        spinInProgress: true
                    };
                case STATUS.failure:
                    return {
                        ...state,
                        spinInProgress: false
                    };
                case STATUS.success:
                    return {
                        ...state,
                        spinInProgress: false,
                        slotState: payload.slotState
                    };
                default:
            }

            break;
        case TYPES.LINES_COUNT_INCREMENT:
            return {
                ...state,
                linesCount: state.linesCount + 1
            };
        case TYPES.LINES_COUNT_DECREMENT:
            return {
                ...state,
                linesCount: state.linesCount - 1
            };
        case TYPES.LINE_BET_INCREMENT:
            return {
                ...state,
                lineBet: state.lineBet + 1
            };
        case TYPES.LINE_BET_DECREMENT:
            return {
                ...state,
                lineBet: state.lineBet - 1
            };
        default:
    }

    return state;
}

export default rootReducer;