import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./slices/modalSlice";
import loadingSlice from "./slices/loadingSlice";
import userManagementSlice from "./slices/userManagementSlice";

export const store = configureStore({
    reducer: {
        modalSlice,
        loadingSlice,
        userManagementSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;
