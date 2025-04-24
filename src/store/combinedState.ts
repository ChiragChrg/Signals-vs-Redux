import { signal } from "@preact/signals-react";
import { store } from "./redux/store";
import { widgetActionsMap } from "./redux/utils/multiWidgetUtils";
import { updateWidget, WidgetsMap } from "./signal/widgetSignal";

export const enableCombinedState = signal<boolean>(false);

export const updateSignalAndReduxWidget = () => {
    // Update Redux widgets
    for (const [, actions] of widgetActionsMap.entries()) {
        store.dispatch(actions.update());
    }

    // Update Signal widgets
    const keys = [...WidgetsMap.peek().keys()];
    for (const id of keys) updateWidget(id);
};

let intervalId: number | null = null;
export const startSynchronizedUpdates = (interval: number) => {
    if (intervalId) clearInterval(intervalId);
    intervalId = setInterval(updateSignalAndReduxWidget, interval);

    return () => {
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
        }
    };
};

// Cleanup function to clear the interval and reset the state 
export const cleanupAllWidgets = () => {
    if (intervalId) clearInterval(intervalId);
    intervalId = null;
    widgetActionsMap.clear();
    WidgetsMap.value.clear();
};