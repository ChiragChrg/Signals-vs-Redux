import { effect, Signal, signal } from "@preact/signals-react";

type WidgetType = {
    metric: Signal<string>;
    isIncreasing: Signal<boolean>;
    updateCount: Signal<number>;
}

// Initialize the WidgetsMap and signals
export const WidgetsMap = signal(new Map<string, WidgetType>());
export const widgetCount = signal(100);
export const intervalTime = signal(17);

// Create a signal for each widget and store it in the map
export const createWidgets = () => {
    const map = new Map<string, WidgetType>();

    for (let i = 0; i < widgetCount.peek(); i++) {
        map.set(`ID-${i}`, {
            metric: signal('0.0'),
            isIncreasing: signal(true),
            updateCount: signal(0)
        });
    }

    WidgetsMap.value = map;
}

// Update a specific widget's signal by ID
export const updateWidget = (id: string) => {
    const widget = WidgetsMap.value.get(id);
    if (!widget) return;

    const { metric, isIncreasing, updateCount } = widget;
    const currentValue = parseFloat(metric.peek()) || 0;

    if (isIncreasing.peek()) {
        const next = currentValue + 0.5;
        metric.value = next >= 100.0 ? "100.0" : next.toFixed(1);
        isIncreasing.value = next >= 100.0 ? false : true;
    } else {
        const next = currentValue - 0.5;
        metric.value = next <= 0 ? "0.0" : next.toFixed(1);
        isIncreasing.value = next <= 0 ? true : false;
    }

    updateCount.value++;
}

// Update all widgets at the specified interval
let intervalId: number | null = null;
effect(() => {
    if (intervalId) clearInterval(intervalId);

    const keys = [...WidgetsMap.value.keys()];
    if (keys.length === 0) return;

    intervalId = setInterval(() => {
        const keys = [...WidgetsMap.peek().keys()];
        for (const id of keys) updateWidget(id);
    }, intervalTime.value);

    return () => {
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
        }
    };
});

// Cleanup function to clear the interval and reset the map
export const cleanupSignalWidgets = () => {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
    WidgetsMap.value.clear();
};