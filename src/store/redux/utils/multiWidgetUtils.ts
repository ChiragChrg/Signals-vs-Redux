import { combineReducers } from '@reduxjs/toolkit';
import { createWidgetSlice } from '../Slice/multiWidgetSliceFactory';
import { rootReducer, store } from '../store';
import { injectReducer } from './reduxUtils';

export const widgetActionsMap = new Map<string, ReturnType<typeof createWidgetSlice>['actions']>();

export const createWidgets = (count: number) => {
    // Reset the asyncReducers, slices, and actions
    store.asyncReducers = {};
    store.slices = {};
    store.actions = {};

    // Replace the root reducer with just the static + empty async
    const combinedReducer = combineReducers({
        ...rootReducer, // your static reducers
        ...store.asyncReducers // now empty
    });
    store.replaceReducer(combinedReducer);

    widgetActionsMap.clear();

    for (let i = 0; i < count; i++) {
        const id = `ID-${i}`;
        const slice = createWidgetSlice(id);
        injectReducer(id, slice);
        widgetActionsMap.set(id, slice.actions);
    }
};

export const updateWidgets = () => {
    for (const [, actions] of widgetActionsMap.entries()) {
        store.dispatch(actions.update());
    }
};

export const getWidget = (id: string) => {
    const widget = store.getState()[id];
    return {
        metric: widget.metric,
        isIncreasing: widget.isIncreasing,
        updateCount: widget.updateCount,
    };
}

let intervalId: number | null = null;
export const startUpdatingWidgets = (interval: number) => {
    if (intervalId) clearInterval(intervalId);
    intervalId = setInterval(updateWidgets, interval);
};

export const cleanupReduxWidgets = () => {
    if (intervalId) clearInterval(intervalId);
    widgetActionsMap.clear();
};