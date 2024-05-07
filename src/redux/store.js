import { configureStore } from "@reduxjs/toolkit";

// import {
// 	persistStore,
// 	persistReducer,
// 	FLUSH,
// 	REHYDRATE,
// 	PAUSE,
// 	PERSIST,
// 	PURGE,
// 	REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import { filterReducer } from "./filtersSlice";
import { contactReducer } from "./contactsSlice";
// import { contactsOpsReduser } from "./contactsOps";

// const contactsPersistConfig = {
// 	key: "contacts",
// 	storage,
// 	whitelist: ["items"],
// };

export const store = configureStore({
	reducer: {
		// contacts: contactsOpsReduser,
		contacts: contactReducer,
		filters: filterReducer,
	},
	// middleware: getDefaultMiddleware =>
	// 	getDefaultMiddleware({
	// 		serializableCheck: {
	// 			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
	// 		},
	// 	}),
});

// export const persistor = persistStore(store);
