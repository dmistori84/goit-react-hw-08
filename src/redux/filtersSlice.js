import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
	// Ім'я слайсу
	name: "filters",
	// Початковий стан редюсера слайсу
	initialState: { name: "" },
	// Об'єкт редюсерів
	reducers: {
		changeFilter(state, action) {
			state.name = action.payload;
		},
	},
});

// Генератори екшенів
export const { changeFilter } = filtersSlice.actions;
// Редюсер слайсу
export const filterReducer = filtersSlice.reducer;
