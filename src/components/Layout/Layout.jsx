import { NavLink, Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import RegistrationPage from "../../pages/RegistrationPage/RegistrationPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import ContactsPage from "../../pages/ContactsPage/ContactsPage";
import NotFound from "../../pages/NotFound/NotFound";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUserData } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import { Suspense, useState } from "react";
import AppBar from "../AppBar/AppBar";
import Loader from "../Loader/Loader";

const Layout = ({ children }) => {
	return (
		<>
			<AppBar />
			<Suspense fallback={<Loader />}>
				<main> {children} </main>
			</Suspense>
		</>
	);
};

export default Layout;

// const Layout = ({ children }) => {
// 	const dispatch = useDispatch();
// 	const isLoginedIn = useSelector(selectIsLoggedIn);
// 	const userData = useSelector(selectUserData);
// 	const [isModalOpen, setIsModalOpen] = useState(false);

// 	const onCloseModal = () => {
// 		setIsModalOpen(false);
// 	};

// 	const onOpenModal = () => {
// 		setIsModalOpen(true);
// 	};

// 	const onLogout = () => {
// 		dispatch(logout());
// 		onCloseModal();
// 	};

// 	return (
// 		<div>
// 			<header>
// 				<nav>
// 					<NavLink to="/">Home</NavLink>
// 					{isLoginedIn ? (
// 						<>
// 							<NavLink to="/contacts">Contacts</NavLink>
// 							<div>
// 								<span>Hi, {userData.name}</span>
// 								<button onClick={onOpenModal} type="button">
// 									Logout
// 								</button>
// 								{isModalOpen && (
// 									<div>
// 										<h3>Log out?</h3>
// 										<button type="button" onClick={onLogout}>
// 											Yes
// 										</button>
// 										<button type="button" onClick={onCloseModal}>
// 											No
// 										</button>
// 									</div>
// 								)}
// 							</div>
// 						</>
// 					) : (
// 						<>
// 							<NavLink to="/register">Register</NavLink>
// 							<NavLink to="/login">Login</NavLink>
// 						</>
// 					)}
// 				</nav>
// 			</header>
// 			<main>{children}</main>
// 		</div>
// 	);
// };

// export default Layout;
