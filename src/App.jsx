import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import { useDispatch } from "react-redux";
import { NavLink, Route, Routes, useParams } from "react-router-dom";
import { Suspense, useEffect } from "react";
import { fetchContacts } from "./redux/contacts/operations";
import NotFound from "./pages/NotFound/NotFound";
import HomePage from "./pages/HomePage/HomePage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import Layout from "./components/Layout/Layout";
import Loader from "./components/Loader/Loader";
import { refreshUser } from "./redux/auth/operations.js";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute.jsx";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx";

// import { setFilter } from "./redux/filtersSlice";
// import { addContact, deleteContact } from "./redux/contactsSlice";

// const defaultContacts = [
// 	{ id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
// 	{ id: "id-2", name: "Hermione Kline", number: "443-89-12" },
// 	{ id: "id-3", name: "Eden Clements", number: "645-17-79" },
// 	{ id: "id-4", name: "Annie Copeland", number: "227-91-26" },
// ];

function App() {
	const dispatch = useDispatch();
	// const { contactId } = useParams();

	// useEffect(() => {
	// 	dispatch(fetchContacts(contactId));
	// }, [dispatch, contactId]);

	useEffect(() => {
		dispatch(refreshUser());
	}, [dispatch]);

	return (
		<>
			<h1>Phonebook</h1>
			<Layout>
				<Suspense fallback={<Loader />}>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route
							path="/register"
							element={
								<RestrictedRoute>
									<RegistrationPage />
								</RestrictedRoute>
							}
						/>
						<Route
							path="/login"
							element={
								<RestrictedRoute>
									<LoginPage />
								</RestrictedRoute>
							}
						/>
						<Route
							path="/contacts"
							element={
								<PrivateRoute>
									<ContactsPage />
								</PrivateRoute>
							}
						/>
						<Route path="*" element={<NotFound />} />
					</Routes>
				</Suspense>
			</Layout>

			{/* <ContactForm />
				<SearchBox />
				<ContactList /> */}
		</>
	);
}

export default App;
