import { CHANGE_DISPLAY_MODE } from './Dashboard.types';

export const changeDisplayMode = (mode) => dispatch => {
    dispatch({
        type: CHANGE_DISPLAY_MODE,
        payload: mode
    });
}