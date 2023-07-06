import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	updateProfile,
} from "firebase/auth";
import { auth } from "../../config";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const signupUser = createAsyncThunk(
	"users/signup",
	async ({ login, email, password }, thunkAPI) => {
		try {
			const response = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);
			return {
				email: response._tokenResponse.email,
				token: response._tokenResponse.idToken,
				login,
			};
			console.log("user data", userData._tokenResponse);
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);
