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