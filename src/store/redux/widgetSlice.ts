import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

const widgetSlice = createSlice({
    name: "widget",
    initialState: Math.floor(Math.random() * 100),
    reducers: {
        updateWidget: () => {
            return Math.floor(Math.random() * 100);
        }
    },
});

export const widgetActions = widgetSlice.actions;
export const SEL_Widget = (state: RootState) => state.widget;

export const widgetReducer = widgetSlice.reducer;