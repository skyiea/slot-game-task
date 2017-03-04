import STATUS from '../enums/requestStatus';
import TYPES from '../actions/actionTypes';
import createReducer from '../utils/redux-helpers/createReducer';

import slotStateReducer from './slotStateReducer';

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
                        spinInProgress: false
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

export default createReducer(rootReducer, {
    slotState: slotStateReducer
});