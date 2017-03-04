import TYPES from './actionTypes';

export function incrementLinesCount() {
    return {
        type: TYPES.LINES_COUNT_INCREMENT
    };
}

export function decrementLinesCount() {
    return {
        type: TYPES.LINES_COUNT_DECREMENT
    };
}

export function incrementLineBet() {
    return {
        type: TYPES.LINE_BET_INCREMENT
    };
}

export function decrementLineBet() {
    return {
        type: TYPES.LINE_BET_DECREMENT
    };
}

export { default as spinSlots } from './spinSlots';