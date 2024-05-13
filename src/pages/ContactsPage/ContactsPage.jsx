import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiDeleteContacts, apiGetContacts } from "../../redux/contacts2/slice";
import {
	selectPhonebookContacts,
	// selectPhonebookIsError,
	selectPhonebookIsLoading,
} from "../../redux/contacts2/selectors";
import Loader from "../../components/Loader/Loader";
import AddContactForm from "../../components/AddContactForm/AddContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";

const ContactsPage = () => {
	const dispatch = useDispatch();
	const contacts = useSelector(selectPhonebookContacts);
	const isLoading = useSelector(selectPhonebookIsLoading);
	// const isError = useSelector(selectPhonebookIsError);

	useEffect(() => {
		dispatch(apiGetContacts());
	}, [dispatch]);

	// const onDeleteContact = contactId => {
	// 	dispatch(apiDeleteContacts(contactId));
	// };

	return (
		<div>
			<AddContactForm />
			<SearchBox />
			{isLoading && <Loader />}
			<ContactList />
			{/* <ul>
				{Array.isArray(contacts) && contacts.length === 0 && (
					<li>No contacts</li>
				)}
				{Array.isArray(contacts) &&
					contacts.map(contact => (
						<li key={contact.id}>
							<h3>Name: {contact.name}</h3>
							<p>Number: {contact.number}</p>
							<button onClick={() => onDeleteContact(contact.id)} type="button">
								Delete
							</button>
						</li>
					))}
			</ul> */}
		</div>
	);
};

export default ContactsPage;
