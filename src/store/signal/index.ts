import { computed, signal } from "@preact/signals-react";

// Counter State
export const counterSignal = signal(0);

export const incrementSignal = () => counterSignal.value++;
export const decrementSignal = () => counterSignal.value--;

// Theme State
export const themeSignal = signal(localStorage.getItem("theme") || "dark");

export const toggleThemeSignal = () => {
    themeSignal.value = themeSignal.value === "dark" ? "light" : "dark";
    localStorage.setItem("theme", themeSignal.value);
    document.documentElement.setAttribute("data-theme", themeSignal.value);
};

// Mouse Position State
export const mousePositionSignal = signal({ x: 0, y: 0 });

export const setMousePositionSignal = (x: number, y: number) => {
    mousePositionSignal.value = { x, y };
};

// Widget State single value
export const widgetSignal = signal("0.0");

let increasing = true;

export const updateWidget = () => {
    if (increasing) {
        widgetSignal.value = (parseFloat(widgetSignal.value) + 0.5).toFixed(1);

        if (parseFloat(widgetSignal.value) >= 100.0) {
            widgetSignal.value = "100.0";
            increasing = false;
        }
    } else {
        widgetSignal.value = (parseFloat(widgetSignal.value) - 0.5).toFixed(1);

        if (parseFloat(widgetSignal.value) <= 0) {
            widgetSignal.value = "0.0";
            increasing = true;
        }
    }
};


// Timer
export const timeStart = signal(0);
export const timeEnd = signal(0);

export const startTimer = () => {
    timeStart.value = Date.now();
};
export const endTimer = () => {
    timeEnd.value = Date.now();
}

export const timeDiff = computed(() => {
    const diff = timeEnd.value - timeStart.value;
    if (diff <= 0) return "...";

    if (diff > 1000) return `${(diff / 1000).toFixed(1)}s`;

    return `${diff}ms`;
});