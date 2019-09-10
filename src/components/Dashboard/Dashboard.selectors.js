import { createSelector } from 'reselect';

export const getComponentState = state => state.dashboard;

export const getDisplayMode = createSelector(
    getComponentState,
    (state) => state.displayMode
);

export const getSensors = createSelector(
    getComponentState,
    (state) => state.sensors
);

export const getSensor = createSelector(
    getComponentState,
    (state) => state.sensor
);

export const getIsFetching = createSelector(
    getComponentState,
    (state) => state.isFetching
);

export const getShowingForm = createSelector(
    getComponentState,
    (state) => state.showingForm
);