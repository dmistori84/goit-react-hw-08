import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { login, logout, refreshUser, register } from "./operations";
// import axios from "axios";

// const instance = axios.create({
// 	baseURL: "https://connections-api.herokuapp.com",
// });

// export const setToken = token => {
// 	instance.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// export const clearToken = () => {
// 	instance.defaults.headers.Authorization = "";
// };

// export const register = createAsyncThunk(
// 	"auth/register",
// 	async (formData, thunkApi) => {
// 		try {
// 			const { data } = await instance.post("/users/signup", formData);
// 			setToken(data.token);
// 			return data;
// 		} catch (e) {
// 			return thunkApi.rejectWithValue(e.message);
// 		}
// 	}
// );

// export const login = createAsyncThunk(
// 	"auth/login",
// 	async (formData, thunkApi) => {
// 		try {
// 			const { data } = await instance.post("/users/login", formData);
// 			setToken(data.token);
// 			return data;
// 		} catch (e) {
// 			return thunkApi.rejectWithValue(e.message);
// 		}
// 	}
// );

// export const refreshUser = createAsyncThunk(
// 	"auth/refresh",
// 	async (_, thunkApi) => {
// 		try {
// 			const state = thunkApi.getState();
// 			const token = state.auth.token;
// 			setToken(token);
// 			const { data } = await instance.get("/users/current");
// 			console.log("refresh", data);

// 			return data;
// 		} catch (e) {
// 			return thunkApi.rejectWithValue(e.message);
// 		}
// 	}
// );

const initialState = {
	isLoggedIn: false,
	userData: null,
	token: null,
	isLoading: false,
	isError: false,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	extraReducers: builder =>
		builder
			.addCase(register.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isLoggedIn = true;
				state.userData = action.payload.user;
				state.token = action.payload.token;
			})
			.addCase(login.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isLoggedIn = true;
				state.userData = action.payload.user;
				state.token = action.payload.token;
			})
			.addCase(refreshUser.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isLoggedIn = true;
				state.userData = action.payload;
			})
			.addCase(logout.fulfilled, () => {
				return initialState;
			})
			.addMatcher(
				isAnyOf(
					register.pending,
					login.pending,
					refreshUser.pending,
					logout.pending
				),
				state => {
					state.isLoading = true;
					state.isError = false;
				}
			)
			.addMatcher(
				isAnyOf(
					register.rejected,
					login.rejected,
					refreshUser.rejected,
					logout.rejected
				),
				state => {
					state.isLoading = false;
					state.isError = true;
				}
			),
});

export const authReducer = authSlice.reducer;
