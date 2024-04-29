import { createSlice } from "@reduxjs/toolkit";

const share_slice = createSlice({
    name: 'share_page',
    initialState: { 
        files_array: [], 
    },
    reducers: {
        push_file(state, action) {
            const file = action.payload;
            state.files_array.push(file)
        }
    }
});

export const share_actions = share_slice.actions;

export default share_slice;