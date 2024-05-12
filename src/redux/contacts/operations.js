import { createAsyncThunk } from "@reduxjs/toolkit";
import {
	addContacts,
	deleteContactsById,
	requestContacts,
} from "../../api/api";

export const initialState = {
	contacts: {
		items: [],
		loading: false,
		error: null,
	},
	filters: {
		name: "",
	},
};
// apiRequestContacts
export const fetchContacts = createAsyncThunk(
	"contacts/fetchAll",
	async (contactId, thinkApi) => {
		try {
			const data = await requestContacts(contactId);
			return data;
		} catch (error) {
			return thinkApi.rejectWithValue(error.message);
		}
	}
);
// apiAddContacts
export const addContact = createAsyncThunk(
	"contacts/addContact",
	async (contact, thinkApi) => {
		try {
			const data = await addContacts(contact);
			return data;
		} catch (error) {
			return thinkApi.rejectWithValue(error.message);
		}
	}
);
// apiDeleteContacts
export const deleteContact = createAsyncThunk(
	"contacts/deleteContacts",
	async (contactId, thinkApi) => {
		try {
			const data = await deleteContactsById(contactId);
			return data;
		} catch (error) {
			return thinkApi.rejectWithValue(error.message);
		}
	}
);

// deleteContactsById;

// const initialState = {
// 	items: [],
// 	loading: false,
// 	error: null,
// };

// const contactsOpsSlise = createSlice({
// 	name: "contactsOps",
// 	initialState,
// 	extraReducers: builder =>
// 		builder
// 			.addCase(apiRequestContacts.pending, state => {
// 				state.loading = true;
// 				state.error = false;
// 			})
// 			.addCase(apiRequestContacts.fulfilled, (state, action) => {
// 				state.loading = false;
// 				state.items = action.payload;
// 			})
// 			.addCase(apiRequestContacts.rejected, state => {
// 				state.loading = false;
// 				state.error = true;
// 			})
// 			.addCase(apiAddContacts.pending, state => {
// 				state.loading = true;
// 				state.error = null;
// 			})
// 			.addCase(apiAddContacts.fulfilled, (state, action) => {
// 				state.items.push(action.payload);
// 				state.loading = false;
// 				state.error = null;
// 			})
// 			.addCase(apiAddContacts.rejected, (state, action) => {
// 				state.loading = false;
// 				state.error = action.payload;
// 			})
// 			.addCase(apiDeleteContacts.pending, state => {
// 				state.loading = true;
// 				state.error = null;
// 			})
// 			.addCase(apiDeleteContacts.fulfilled, (state, action) => {
// 				state.items = state.items.filter(
// 					contact => contact.id !== action.payload.id
// 				);
// 				state.loading = false;
// 				state.error = null;
// 			})
// 			.addCase(apiDeleteContacts.rejected, (state, action) => {
// 				state.loading = false;
// 				state.error = action.payload;
// 			}),
// });

// export const contactsOpsReduser = contactsOpsSlise.reducer;
