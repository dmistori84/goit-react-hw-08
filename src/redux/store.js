import { configureStore } from "@reduxjs/toolkit";
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { filterReducer } from "./filters/slice";
import { contactReducer } from "./contacts/slice";
import { authReducer } from "./auth/slice";
import { phonebookReducer } from "./contacts2/slice";
// import { contactsOpsReduser } from "./contactsOps";

const authPersistConfig = {
	key: "auth",
	storage,
	whitelist: ["token"],
};

export const store = configureStore({
	reducer: {
		// contacts: contactsOpsReduser,
		contacts: contactReducer,
		phonebook: phonebookReducer,
		filters: filterReducer,
		auth: persistReducer(authPersistConfig, authReducer),
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export const persistor = persistStore(store);
