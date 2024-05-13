import {
	// useDispatch,
	useSelector,
} from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
// import { useEffect } from "react";
// import { apiRequestContacts } from "../../redux/contactsOps";
// import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import {
	selectContactListisError,
	selectContactListisLoading,
} from "../../redux/contacts/slice";
import { selectPhonebookIsLoading } from "../../redux/contacts2/selectors";
import { selectFilteredContacts } from "../../redux/filters/selectors.js";

const ContactList = () => {
	const filteredContacts = useSelector(selectFilteredContacts);
	console.log("ContactList ~ filteredContacts:", filteredContacts);
	// const dispatch = useDispatch();
	// const { contactId } = useParams();
	// const selectContacts = useSelector(selectContactListselectContacts);
	// const selectNameFilter = useSelector(selectContactListselectNameFilter);
	// const filteredContacts = useSelector(selectFilteredContacts);
	// // const selectContacts2 = useSelector(state => state.contactsOps.items);
	// const isLoading = useSelector(selectContactListisLoading);
	// const isError = useSelector(selectContactListisError);

	// useEffect(() => {
	// 	dispatch(apiRequestContacts(contactId));
	// }, [dispatch, contactId]);

	// const filteredContacts = selectContacts.filter(contact =>
	// 	contact.name.toLowerCase().includes(selectNameFilter.toLowerCase())
	// );
	const isLoading = useSelector(selectPhonebookIsLoading);

	return (
		<div>
			{isLoading && <Loader />}
			<ul className={css.list}>
				{filteredContacts.map(contact => (
					<Contact key={contact.id} contacts={contact} />
				))}
			</ul>
		</div>
	);
};

export default ContactList;
