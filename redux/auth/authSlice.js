import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer } from "redux-persist";
import { signupUser } from "./authOperations";

const initialState = {
	user: { login: null, email: null, password: null },
	token: null,
	isLoggedIn: false,
	isRefreshing: false,
	isLoginFailed: false,
	isRegisterFailed: false,
};

 const authSlice = createSlice({
	name: "auth",
	initialState,
	reducer: {},
	extraReducers: (builder) => {
        builder.addCase(signupUser.fulfilled, (state, action) => {
            state.user.login = action.payload.login;
            state.user.email = action.payload.email;
            state.token = action.payload.token;
            // console.log(state.user.login, state.user.email, state.token);
        });
        builder.addCase(signupUser.rejected, (state, action) => {
            console.log(action.payload);
            if (action.payload) {
                state.isRegisterFailed = true
            }
				});
	},
});

const persistConfig = {
	key: "auth",
	storage: AsyncStorage,
	whitelist: ["token"],
};

export const authPersistedReducer = persistReducer(persistConfig, authSlice.reducer);