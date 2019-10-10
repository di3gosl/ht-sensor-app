import { createSelector } from 'reselect';

export const getComponentState = state => state.data;

export const getDisplayMode = createSelector(
    getComponentState,
    (state) => state.displayMode
);

export const getSensor = createSelector(
    getComponentState,
    (state) => state.sensor
);

export const getIsFetching = createSelector(
    getComponentState,
    (state) => state.isFetching
);