import { useDispatch } from "react-redux";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

import { apiAddContacts } from "../../redux/contacts2/slice";
import css from "./AddContactForm.module.css";

const INITIAL_VALUES = {
	name: "",
	number: "",
};

const MAX_SYMBOL = 50;
const MIN_SYMBOL = 3;

const addNewContactSchema = Yup.object().shape({
	name: Yup.string()
		.min(MIN_SYMBOL, "Too Short!")
		.max(MAX_SYMBOL, "Too Long!")
		.required("Required"),
	number: Yup.string()
		.min(MIN_SYMBOL, "Too Short!")
		.max(MAX_SYMBOL, "Too Long!")
		.required("Required"),
});

const AddContactForm = () => {
	const dispatch = useDispatch();

	const handleSubmit = (values, actions) => {
		dispatch(apiAddContacts(values));
		actions.resetForm();
	};

	return (
		<Formik
			initialValues={INITIAL_VALUES}
			onSubmit={handleSubmit}
			validationSchema={addNewContactSchema}
		>
			<Form className={css.form}>
				<h2>Add new contact</h2>
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

export default AddContactForm;
