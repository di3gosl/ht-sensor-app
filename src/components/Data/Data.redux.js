import Immutable from 'immutable';
import * as types from './Data.types';

const initialState = {
    sensor: null,
    isFetching: false
}

export default function (state = initialState, action) {
    state = Immutable.fromJS(state);
    switch (action.type) {
        case types.FETCH_SENSOR:
            return state.setIn(['sensor'], null)
                .setIn(['isFetching'], true)
                .toJS();

        case types.FETCH_SENSOR_SUCCESS:
            return state.setIn(['sensor'], action.payload)
                .setIn(['isFetching'], false)
                .toJS();

        case types.FETCH_SENSOR_ERROR:
            return state.setIn(['isFetching'], false).toJS();

        default:
            return state.toJS();
    }
}