import { createSlice } from "@reduxjs/toolkit";

const vendorSlice = createSlice({
    name:"vendor",
    initialState:{
        username:null,
        user_id:null,
    },
    reducers:{
        addVendor: (state,  action) =>{
            return action.payload;
        },
        removeVendor: (state, action) => {
            return null;
        },
    },
});

export const { addVendor, removeVendor} = vendorSlice.actions;

export default vendorSlice.reducer;