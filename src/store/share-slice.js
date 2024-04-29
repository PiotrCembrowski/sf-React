import { createSlice } from "@reduxjs/toolkit";

const share_slice = createSlice({
    name: 'share_page',
    initialState: { files_array: [] },
    reducers: {
        push_file(state) {
            state.files_array = [...state.files_array, state.new_file];
        }
    }
});

export const share_actions = share_slice.actions;

export default share_slice;