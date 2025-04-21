import { signal } from "@preact/signals-react";

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


// Widget State
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

// Mouse Position State
export const mousePositionSignal = signal({ x: 0, y: 0 });

export const setMousePositionSignal = (x: number, y: number) => {
    mousePositionSignal.value = { x, y };
};