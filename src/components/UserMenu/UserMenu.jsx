import { useDispatch, useSelector } from "react-redux";
import { selectUserData } from "../../redux/auth/selectors";
import { useState } from "react";
import { logout } from "../../redux/auth/operations";

const UserMenu = () => {
	const dispatch = useDispatch();
	const userData = useSelector(selectUserData);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const onCloseModal = () => {
		setIsModalOpen(false);
	};

	const onOpenModal = () => {
		setIsModalOpen(true);
	};

	const onLogout = () => {
		dispatch(logout());
		onCloseModal();
	};

	return (
		<div>
			<span>Hi, {userData.name}</span>
			<button onClick={onOpenModal} type="button">
				Logout
			</button>
			{isModalOpen && (
				<div>
					<h3>Log out?</h3>
					<button type="button" onClick={onLogout}>
						Yes
					</button>
					<button type="button" onClick={onCloseModal}>
						No
					</button>
				</div>
			)}
		</div>
	);
};

export default UserMenu;
