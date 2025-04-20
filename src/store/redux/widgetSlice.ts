import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

const initialState = {
    value: 0,
}

const widgetSlice = createSlice({
    name: "widget",
    initialState,
    reducers: {
        setValue: (state, action: PayloadAction<number>) => {
            state.value = action.payload;
        },
        clearValue: (state) => {
            state.value = 0;
        }
    },
});

export const widgetActions = widgetSlice.actions;
export const SEL_Widget = (state: RootState) => state.widget.value;

export const widgetReducer = widgetSlice.reducer;