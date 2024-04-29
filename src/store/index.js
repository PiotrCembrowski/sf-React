import { configureStore } from "@reduxjs/toolkit";
import { share_slice } from './share_slice';

const store = configureStore({
    reducer: { share: share_slice.reducer }
});

export default store;