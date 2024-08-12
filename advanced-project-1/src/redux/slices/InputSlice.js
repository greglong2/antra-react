import { createSlice } from "@reduxjs/toolkit";

export const inputSlice = createSlice({

    name: "books",
    initialState: {
        input: ''
    },
    reducers: {
        setInput: (state, action) => {
            state.input = action.payload;
        },
    }
});

export const { setInput } = inputSlice.actions;

export default inputSlice.reducer;