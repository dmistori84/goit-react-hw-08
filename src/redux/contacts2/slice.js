import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
// import { login, logout, refreshUser, register } from "./operations";
import { instance } from "../auth/operations";

export const apiGetContacts = createAsyncThunk(
	"contacts/getAll",
	async (_, thunkApi) => {
		try {
			const { data } = await instance.get("/contacts");
			console.log("data getcontacts", data);
			return data;
		} catch (e) {
			return thunkApi.rejectWithValue(e.message);
		}
	}
);

export const apiAddContacts = createAsyncThunk(
	"contacts/addNew",
	async (formData, thunkApi) => {
		try {
			const { data } = await instance.post("/contacts", formData);
			console.log("data apiAddContact: ", data);

			return data;
		} catch (e) {
			return thunkApi.rejectWithValue(e.message);
		}
	}
);

export const apiDeleteContacts = createAsyncThunk(
	"contacts/delete",
	async (contactId, thunkApi) => {
		try {
			const { data } = await instance.delete(`/contacts/${contactId}`);
			return data;
		} catch (e) {
			return thunkApi.rejectWithValue(e.message);
		}
	}
);

const initialState = {
	contacts: [],
	isLoading: false,
	isError: false,
};

const contactsSlice = createSlice({
	name: "contacts2",
	initialState,
	extraReducers: builder =>
		builder
			.addCase(apiGetContacts.fulfilled, (state, action) => {
				state.isLoading = false;
				state.contacts = action.payload;
			})
			.addCase(apiAddContacts.fulfilled, (state, action) => {
				state.isLoading = false;
				state.contacts = [...state.contacts, action.payload];
				// state.contacts.push(action.payload);
			})
			.addCase(apiDeleteContacts.fulfilled, (state, action) => {
				state.isLoading = false;
				state.contacts = state.contacts.filter(
					contact => contact.id !== action.payload.id
				);
			})
			.addMatcher(
				isAnyOf(
					apiGetContacts.pending,
					apiAddContacts.pending,
					apiDeleteContacts.pending
				),
				state => {
					state.isLoading = true;
					state.isError = false;
				}
			)
			.addMatcher(
				isAnyOf(
					apiGetContacts.rejected,
					apiAddContacts.rejected,
					apiDeleteContacts.rejected
				),
				state => {
					state.isLoading = false;
					state.isError = true;
				}
			),
});

export const phonebookReducer = contactsSlice.reducer;
