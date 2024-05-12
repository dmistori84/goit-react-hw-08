import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiGetContacts } from "../../redux/contacts2/slice";
import {
	selectPhonebookContacts,
	// selectPhonebookIsError,
	selectPhonebookIsLoading,
} from "../../redux/contacts2/selectors";
import Loader from "../../components/Loader/Loader";
import AddContactForm from "../../components/AddContactForm/AddContactForm";

const ContactsPage = () => {
	const dispatch = useDispatch();
	const contacts = useSelector(selectPhonebookContacts);
	const isLoading = useSelector(selectPhonebookIsLoading);
	// const isError = useSelector(selectPhonebookIsError);

	useEffect(() => {
		dispatch(apiGetContacts());
	}, [dispatch]);
	return (
		<div>
			<AddContactForm />
			{isLoading && <Loader />}
			<ul>
				{Array.isArray(contacts) && contacts.length === 0 && (
					<li>No contacts</li>
				)}
				{Array.isArray(contacts) &&
					contacts.map(contact => (
						<li key={contact.id}>
							<h3>Name: {contact.name}</h3>
							<p>Number: {contact.number}</p>
						</li>
					))}
			</ul>
			ContactsPage
		</div>
	);
};

export default ContactsPage;
