import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
//import { nanoid } from "nanoid";
import * as Yup from "yup";

import css from "./LoginPage.module.css";
import { addContact } from "../../redux/contacts/operations";
import { login } from "../../redux/auth/operations";

const INITIAL_VALUES = {
	email: "",
	password: "",
};

const MAX_SYMBOL = 30;
const MIN_SYMBOL = 4;

const loginUserSchema = Yup.object().shape({
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

const LoginPage = () => {
	const dispatch = useDispatch();

	const onAddContacts = data => {
		// const newContact = {
		// 	...data,
		// };
		dispatch(addContact(data));
	};

	const handleSubmit = (values, actions) => {
		dispatch(login(values));
		// onAddContacts(values);
		actions.resetForm();
	};
	return (
		<Formik
			initialValues={INITIAL_VALUES}
			onSubmit={handleSubmit}
			validationSchema={loginUserSchema}
		>
			<Form className={css.form}>
				<h2>Login</h2>
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
					Login
				</button>
			</Form>
		</Formik>
	);
};

export default LoginPage;
