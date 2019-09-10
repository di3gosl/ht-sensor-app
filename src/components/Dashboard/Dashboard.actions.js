import axios from 'axios';
import * as types from './Dashboard.types';

export const changeDisplayMode = (mode) => dispatch => {
    dispatch({
        type: types.CHANGE_DISPLAY_MODE,
        payload: mode
    });
}

export const fetchSensors = () => dispatch => {
    axios.get('http://pokeapi.co/api/v2/pokemon/')
        .then((response) => {
            dispatch({
                type: types.FETCH_SENSORS_SUCCESS,
                payload: [{ code: 'bio-001', name: 'BioFractal', temperature: 25.5, humidity: 45 }]
            })
        })
        .catch((error) => {
            dispatch({
                type: types.FETCH_SENSORS_ERROR,
                payload: null
            })
        });
}

export const showForm = () => dispatch => {
    dispatch({
        type: types.SHOW_FORM,
        payload: null
    });
}

export const hideForm = () => dispatch => {
    dispatch({
        type: types.HIDE_FORM,
        payload: null
    });
}

export const setForm = (form) => dispatch => {
    dispatch({
        type: types.SET_FORM,
        payload: form
    });
}