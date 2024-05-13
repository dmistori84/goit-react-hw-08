import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import css from "./SearchBox.module.css";
// import { selectSearchBoxFilter } from "../../redux/filters/selectors";
import { selectFilterContacts } from "../../redux/contacts2/selectors";
const SearchBox = () => {
	const dispatch = useDispatch();
	const filter = useSelector(selectFilterContacts);

	const onChangeFilter = event => {
		dispatch(changeFilter(event.target.value));
	};

	return (
		<label className={css.label}>
			Find contacts by name
			<input
				className={css.input}
				type="text"
				value={filter}
				onChange={onChangeFilter}
			/>
		</label>
	);
};

export default SearchBox;
