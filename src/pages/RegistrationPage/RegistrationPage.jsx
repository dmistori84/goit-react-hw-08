import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
//import { nanoid } from "nanoid";
import * as Yup from "yup";

import css from "./RegistrationPage.module.css";
import { addContact } from "../../redux/contacts/operations";
import { register } from "../../redux/auth/operations";

const INITIAL_VALUES = {
	name: "",
	email: "",
	password: "",
};

const MAX_SYMBOL = 30;
const MIN_SYMBOL = 4;

const registerUserSchema = Yup.object().shape({
	name: Yup.string()
		.min(MIN_SYMBOL, "Too Short!")
		.max(MAX_SYMBOL, "Too Long!")
		.required("Required"),
	email: Yup.string()
		.min(MIN_SYMBOL, "Too Short!")
		.max(MAX_SYMBOL, "Too Long!")
		.email("You must enter valid email address!")
		.required("Required"),
	password: Yup.string()
		.min(MIN_SYMBOL, "Too Short!")
		.max(MAX_SYMBOL, "Too Long!")
		.required("Required"),
});

const RegistrationPage = () => {
	const dispatch = useDispatch();

	const onAddContacts = data => {
		// const newContact = {
		// 	...data,
		// };
		dispatch(addContact(data));
	};

	const handleSubmit = (values, actions) => {
		// onAddContacts(values);
		dispatch(register(values));
		actions.resetForm();
	};
	return (
		<Formik
			initialValues={INITIAL_VALUES}
			onSubmit={handleSubmit}
			validationSchema={registerUserSchema}
		>
			<Form className={css.form}>
				<h2>Refister user</h2>
				<label className={css.formLabel}>
					Name
					<Field type="text" name="name" />
					<ErrorMessage component="p" name="name" />
				</label>
				<label className={css.formLabel}>
					Email
					<Field type="email" name="email" />
					<ErrorMessage component="p" name="email" />
				</label>
				<label className={css.formLabel}>
					Password
					<Field type="password" name="password" />
					<ErrorMessage component="p" name="password" />
				</label>
				<button className={css.btnForm} type="submit">
					Register
				</button>
			</Form>
		</Formik>
	);
};

export default RegistrationPage;
