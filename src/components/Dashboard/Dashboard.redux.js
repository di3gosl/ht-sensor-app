import Immutable from 'immutable';
import * as types from './Dashboard.types';

const initialState = {
    sensors: [
        {code: 'bio-001', name: 'BioFractal', temperature: 25.5, humidity: 45},
        {code: 'home-001', name: 'Home', temperature: 25.5, humidity: 45},
        {code: 'office-001', name: 'Office', temperature: 25.5, humidity: 45},
        {code: 'lab-001', name: 'Laboratory', temperature: 25.5, humidity: 45},
    ],
    displayMode: 1
}

export default function (state = initialState, action) {
    state = Immutable.fromJS(state);
    switch (action.type) {
        case types.CHANGE_DISPLAY_MODE:
            state = state.setIn(['displayMode'], action.payload);
            return state.toJS();
        default:
            return state.toJS();
    }
}