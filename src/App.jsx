import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";

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
	const { contactId } = useParams();

	useEffect(() => {
		dispatch(fetchContacts(contactId));
	}, [dispatch, contactId]);

	// useEffect(() => {
	// 	dispatch(apiDeleteContacts(contactId));
	// }, [dispatch, contactId]);

	// const dispatch = useDispatch();
	// const contacts = useSelector(state => state.contactData.contacts.items);
	// const filter = useSelector(state => state.changeFilter);

	// const onChangeFilter = event => {
	// 	dispatch(setFilter(event.target.value));
	// };

	// const onAddContacts = data => {
	// 	const newContact = {
	// 		...data,
	// 		id: nanoid(),
	// 	};
	// 	dispatch(addContact(newContact));
	// };

	// const filteredContacts = contacts.filter(contact =>
	// 	contact.name.toLowerCase().includes(filter.toLowerCase())
	// );

	// const onDeleteContact = id => {
	// 	dispatch(deleteContact(id));
	// };

	return (
		<>
			<h1>Phonebook</h1>
			<ContactForm />
			<SearchBox />
			<ContactList />
		</>
	);
}

export default App;
