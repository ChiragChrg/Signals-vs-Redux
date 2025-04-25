import { createSlice } from '@reduxjs/toolkit';

export type WidgetStateType = {
    metric: number;
    isIncreasing: boolean;
    updateCount: number;
};

export const createWidgetSlice = (id: string) => {
    return createSlice({
        name: `widget/${id}`,
        initialState: {
            metric: Math.random() * 100.0,
            isIncreasing: true,
            updateCount: 0
        } as WidgetStateType,
        reducers: {
            update: (state) => {
                if (state.isIncreasing) {
                    state.metric += 0.5;
                    if (state.metric >= 100.0) {
                        state.metric = 100.0;
                        state.isIncreasing = false;
                    }
                } else {
                    state.metric -= 0.5;
                    if (state.metric <= 0.0) {
                        state.metric = 0.0;
                        state.isIncreasing = true;
                    }
                }
                state.updateCount++;
            }
        },
    });
};

export type CreateWidgetType = ReturnType<typeof createWidgetSlice>;