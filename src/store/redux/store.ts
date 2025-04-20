import { configureStore } from '@reduxjs/toolkit';
import {
    counterReducer,
    themeReducer,
    widgetReducer,
    mouseReducer
} from './index';

// Combine all reducers into a single root reducer
export const rootReducer = {
    counter: counterReducer,
    theme: themeReducer,
    widget: widgetReducer,
    mouse: mouseReducer
}

// Create the Redux store
const store = configureStore({
    reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;