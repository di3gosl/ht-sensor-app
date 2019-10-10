import axios from 'axios';
import * as types from './Data.types';

export const fetchSensor = () => dispatch => {
    dispatch({ type: types.FETCH_SENSOR, payload: null });
    axios.get('http://pokeapi.co/api/v2/pokemon/')
        .then((response) => {
            dispatch({
                type: types.FETCH_SENSOR_SUCCESS,
                payload: [{ code: 'bio-001', name: 'BioFractal', temperature: 25.5, humidity: 45 }]
            });
        })
        .catch((error) => {
            dispatch({ type: types.FETCH_SENSOR_ERROR, payload: null });
        });
}