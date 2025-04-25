import { signal } from "@preact/signals-react";
import { WidgetsMap } from "./widgetSignal";

// Selected widget id to mutate specific signal
export const selectedWidget = signal<string>("");

// Update all incoming signals with new metric and isIncreasing values
export const updateAllIncomingSignal = (newMetric: number, newIsIncreasing: boolean) => {
    const allSignals = [...WidgetsMap.peek().values()];

    for (const signal of allSignals) {
        const { metric, isIncreasing, updateCount, status } = signal;
        status.value = "pending";

        if (isIncreasing.peek()) {
            metric.value = newMetric >= 100.0 ? "100.0" : newMetric.toFixed(1);
            isIncreasing.value = newIsIncreasing;
        } else {
            metric.value = newMetric <= 0 ? "0.0" : newMetric.toFixed(1);
            isIncreasing.value = newIsIncreasing;
        }

        updateCount.value++;
        status.value = "complete";
    }
};

// Update a specific incoming signal by ID with new metric and isIncreasing values
export const updateIncomingSignal = (id: string, newMetric: number) => {
    const signal = WidgetsMap.peek().get(id);
    if (!signal) return;

    const { metric, isIncreasing, updateCount, status } = signal;
    status.value = "pending";

    setTimeout(() => {
        if (isIncreasing.peek()) {
            metric.value = newMetric >= 100.0 ? "100.0" : newMetric.toFixed(1);
            isIncreasing.value = newMetric >= 100.0 ? false : true;
        } else {
            metric.value = newMetric <= 0 ? "0.0" : newMetric.toFixed(1);
            isIncreasing.value = newMetric <= 0 ? true : false;
        }
    }, 500);

    updateCount.value++;
    status.value = "complete";
};

// Update a specific incoming signal isIncreasing value by ID
export const updateIncomingIsIncreasing = (id: string, newIsIncreasing: boolean) => {
    const signal = WidgetsMap.peek().get(id);
    if (!signal) return;

    const { isIncreasing, status } = signal;
    status.value = "pending";

    setTimeout(() => {
        isIncreasing.value = newIsIncreasing;
    }, 500);

    status.value = "complete";
}