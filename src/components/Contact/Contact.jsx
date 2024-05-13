import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { apiDeleteContacts } from "../../redux/contacts2/slice";

const Contact = ({ contacts }) => {
	const dispatch = useDispatch();

	const onDeleteContact = id => {
		dispatch(apiDeleteContacts(id));
	};

	return (
		<li className={css.item}>
			<span>
				<p>👤{contacts.name}</p>
				<p>📞{contacts.number}</p>
			</span>
			<button className={css.btn} onClick={() => onDeleteContact(contacts.id)}>
				Delete
			</button>
		</li>
	);
};

export default Contact;
