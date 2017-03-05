import rootReducer from './rootReducer';
import TYPES from '../constants/actionTypes';
import initialState from '../store/initialState';

describe('reducers', () => {
    it('should return the initial state', () => {
        expect(rootReducer(undefined, {})).toEqual(initialState);
    });

    it('should return state decremented lines count', () => {
        expect(rootReducer(initialState, {
            type: TYPES.LINES_COUNT_DECREMENT
        })).toEqual({
            ...initialState,
            linesCount: initialState.linesCount - 1
        });
    });

    // ...
});