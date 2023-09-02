import { createSlice } from "@reduxjs/toolkit";
import { getUserInfo } from "./user.actions";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLoading: false,
        error: null,
        user: {},
    },
    reducers: {},
})

export const { actions, reducer } = userSlice