import Immutable from 'immutable';
import * as types from './Dashboard.types';

const initialState = {
    sensors: [
        { code: 'bio-001', name: 'BioFractal', temperature: 25.5, humidity: 45 },
        { code: 'home-001', name: 'Home', temperature: 25.5, humidity: 45 },
        { code: 'office-001', name: 'Office', temperature: 25.5, humidity: 45 },
        { code: 'lab-001', name: 'Laboratory', temperature: 25.5, humidity: 45 },
    ],
    displayMode: 1,
    sensor: { code: '', name: '', temperature: '', humidity: '' },
    isFetching: false,
    showingForm: false
}

export default function (state = initialState, action) {
    state = Immutable.fromJS(state);
    switch (action.type) {
        case types.CHANGE_DISPLAY_MODE:
            return state.setIn(['displayMode'], action.payload)
                .toJS();

        case types.FETCH_SENSORS:
            return state.setIn(['sensors'], [])
                .setIn(['isFetching'], true)
                .toJS();

        case types.FETCH_SENSORS_SUCCESS:
            return state.setIn(['sensors'], action.payload)
                .setIn(['isFetching'], false)
                .toJS();

        case types.FETCH_SENSORS_ERROR:
            return state.setIn(['isFetching'], false)
                .toJS();

        case types.SHOW_FORM:
            return state.setIn(['showingForm'], true)
                .toJS();

        case types.HIDE_FORM:
            return state.setIn(['showingForm'], false)
                .toJS();

        case types.SET_FORM:
            return state.setIn(['sensor'], action.payload)
                .toJS();

        default:
            return state.toJS();
    }
}