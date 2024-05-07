import { Blocks } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader = () => {
	return (
		<Blocks
			height="80"
			width="80"
			color="#4fa94d"
			ariaLabel="blocks-loading"
			wrapperStyle={{}}
			wrapperClass={css.blocksWrapper}
			visible={true}
		/>
	);
};

export default Loader;
