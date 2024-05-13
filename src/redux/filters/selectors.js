// export const selectSearchBoxFilter = state => state.filters.name;
import { createSelector } from "@reduxjs/toolkit";
import {
	selectPhonebookContacts,
	selectFilterContacts,
} from "../contacts2/selectors";

export const selectFilteredContacts = createSelector(
	[selectPhonebookContacts, selectFilterContacts],
	(contacts, filters) => {
		return contacts.filter(
			contact =>
				contact.name.toLowerCase().includes(filters.toLowerCase()) ||
				contact.number.includes(filters)
		);
	}
);
