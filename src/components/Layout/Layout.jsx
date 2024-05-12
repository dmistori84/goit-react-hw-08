import { NavLink, Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import RegistrationPage from "../../pages/RegistrationPage/RegistrationPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import ContactsPage from "../../pages/ContactsPage/ContactsPage";
import NotFound from "../../pages/NotFound/NotFound";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUserData } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

const Layout = ({ children }) => {
	const dispatch = useDispatch();
	const isLoginedIn = useSelector(selectIsLoggedIn);
	const userData = useSelector(selectUserData);

	const onLogout = () => {
		dispatch(logout());
	};

	return (
		<div>
			<header>
				<nav>
					<NavLink to="/">Home</NavLink>
					{isLoginedIn ? (
						<>
							<NavLink to="/contacts">Contacts</NavLink>
							<div>
								<span>Hi, {userData.name}</span>
								<button onClick={onLogout} type="button">
									Logout
								</button>
							</div>
						</>
					) : (
						<>
							<NavLink to="/register">Register</NavLink>
							<NavLink to="/login">Login</NavLink>
						</>
					)}
				</nav>
			</header>
			<main>{children}</main>
		</div>
	);
};

export default Layout;
