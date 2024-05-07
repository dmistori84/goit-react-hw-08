import { useDispatch } from "react-redux";
import { ErrorMessage, Field, Form, Formik } from "formik";
//import { nanoid } from "nanoid";
import * as Yup from "yup";

import css from "./ContactForm.module.css";
import { addContact } from "../../redux/contactsOps";

const INITIAL_VALUES = {
	name: "",
	number: "",
};

const MAX_SYMBOL = 50;
const MIN_SYMBOL = 3;

const contactsValidationSchema = Yup.object().shape({
	name: Yup.string()
		.min(MIN_SYMBOL, "Too Short!")
		.max(MAX_SYMBOL, "Too Long!")
		.required("Required"),
	number: Yup.string()
		.min(MIN_SYMBOL, "Too Short!")
		.max(MAX_SYMBOL, "Too Long!")
		.required("Required"),
});

const ContactForm = () => {
	const dispatch = useDispatch();

	const onAddContacts = data => {
		// const newContact = {
		// 	...data,
		// };
		dispatch(addContact(data));
	};

	const handleSubmit = (values, actions) => {
		onAddContacts(values);
		actions.resetForm();
	};

	return (
		<Formik
			initialValues={INITIAL_VALUES}
			onSubmit={handleSubmit}
			validationSchema={contactsValidationSchema}
		>
			<Form className={css.form}>
				<label className={css.formLabel}>
					Name
					<Field type="text" name="name" />
					<ErrorMessage component="p" name="name" />
				</label>
				<label className={css.formLabel}>
					Number
					<Field type="tel" name="number" />
					<ErrorMessage component="p" name="number" />
				</label>
				<button className={css.btnForm} type="submit">
					Add contact
				</button>
			</Form>
		</Formik>
	);
};

export default ContactForm;
