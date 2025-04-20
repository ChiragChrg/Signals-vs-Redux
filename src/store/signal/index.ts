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
const generateValue = () => Math.floor(Math.random() * 100);

export const widgetSignal = signal(generateValue());

export const updateWidget = () => {
    widgetSignal.value = generateValue();
}

// Mouse Position State
export const mousePositionSignal = signal({ x: 0, y: 0 });

export const setMousePositionSignal = (x: number, y: number) => {
    mousePositionSignal.value = { x, y };
};