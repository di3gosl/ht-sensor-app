import axios from 'axios';
import * as types from './Dashboard.types';
import * as selectors from './Dashboard.selectors';
import { showNotification } from './../../utils';

export const changeDisplayMode = (mode) => dispatch => {
    dispatch({
        type: types.CHANGE_DISPLAY_MODE,
        payload: mode
    });
}

export const fetchSensors = () => dispatch => {
    dispatch({ type: types.FETCH_SENSORS, payload: null });
    axios.get('http://pokeapi.co/api/v2/pokemon/')
        .then((response) => {
            dispatch({
                type: types.FETCH_SENSORS_SUCCESS,
                payload: [{ code: 'bio-001', name: 'BioFractal', temperature: 25.5, humidity: 45 }]
            });
        })
        .catch((error) => {
            dispatch({ type: types.FETCH_SENSORS_ERROR, payload: null });
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

export const setField = (name, value) => dispatch => {
    dispatch({
        type: types.SET_FIELD,
        payload: { name, value }
    });
}

export const saveSensor = () => (dispatch, getState) => {
    const sensor = selectors.getSensor(getState());

    if (sensor.code === '' || sensor.name === '') {
        showNotification(
            'Complete Data',
            'Fill all the fields before continue',
            'info'
        );
        return;
    }

    dispatch({ type: types.SAVE_SENSOR, payload: null });
    axios.post('http://pokeapi.co/api/v2/pokemon/', sensor)
        .then((response) => {
            dispatch({ type: types.SAVE_SENSOR_SUCCESS, payload: sensor });
            showNotification(
                'Data Saved!',
                'Your data has been saved successfully!',
                'success'
            );
        })
        .catch((error) => {
            dispatch({ type: types.SAVE_SENSOR_ERROR, payload: null });
            showNotification(
                'Error',
                'An error has occurred saving the data',
                'danger'
            );
        });
}