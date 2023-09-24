import { createSlice } from "@reduxjs/toolkit";

const FilterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        setFilter: (_, action) => action.payload,
        },
    });

export const FilterReduser = FilterSlice.reducer;
export const { setFilter } = FilterSlice.actions;