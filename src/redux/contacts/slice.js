import { createSlice, createSelector } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./operations";

// const initialState = {
// 	contacts: {
// 		items: [],
// 		loading: false,
// 		error: null,
// 	},
// 	filters: {
// 		name: "",
// 	},
// };
const initialState = {
	items: [],
};

// const contactsSlice = createSlice({
// 	// Ім'я слайсу
// 	name: "contacts",
// 	// Початковий стан редюсера слайсу
// 	initialState,
// 	// Об'єкт редюсерів
// 	reducers: {
// 		addContact(state, action) {
// 			state.items.push(action.payload);
// 		},
// 		deleteContact(state, action) {
// 			state.items = state.items.filter(
// 				contact => contact.id !== action.payload.id
// 			);
// 		},
// 		// setFilter(state, action) {
// 		// 	state.filters.name = action.payload;
// 		// },
// 	},
//});

const contactsSlice = createSlice({
	name: "contacts",
	initialState,
	extraReducers: builder =>
		builder
			.addCase(fetchContacts.pending, state => {
				state.loading = true;
				state.error = false;
			})
			.addCase(fetchContacts.fulfilled, (state, action) => {
				state.loading = false;
				state.items = action.payload;
			})
			.addCase(fetchContacts.rejected, state => {
				state.loading = false;
				state.error = true;
			})
			.addCase(addContact.pending, state => {
				state.loading = true;
				state.error = null;
			})
			.addCase(addContact.fulfilled, (state, action) => {
				state.items.push(action.payload);
				state.loading = false;
				state.error = null;
			})
			.addCase(addContact.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			})
			.addCase(deleteContact.pending, state => {
				state.loading = true;
				state.error = null;
			})
			.addCase(deleteContact.fulfilled, (state, action) => {
				state.items = state.items.filter(
					contact => contact.id !== action.payload.id
				);
				state.loading = false;
				state.error = null;
			})
			.addCase(deleteContact.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			}),
});

export const selectContactListselectContacts = state => state.contacts.items;
export const selectContactListselectNameFilter = state => state.filters.name;
export const selectContactListisLoading = state => state.contacts.loading;
export const selectContactListisError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
	[selectContactListselectContacts, selectContactListselectNameFilter],
	(contacts, filters) => {
		return contacts.filter(contact =>
			contact.name.toLowerCase().includes(filters.toLowerCase())
		);
	}
);

// Генератори екшенів
// export const { addContact, deleteContact } = contactsSlice.actions;
// Редюсер слайсу
export const contactReducer = contactsSlice.reducer;
