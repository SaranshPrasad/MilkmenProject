import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlics";
import vendorReducer from "./vendorSlice";
const appStore =  configureStore(
    {
        reducer: {
            user: userReducer,
            vendor: vendorReducer,
        },
    }
);
export default appStore;