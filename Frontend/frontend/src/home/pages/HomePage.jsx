import { CategoryList } from "../components/CategoryList";
import { Navbar } from "../components/Navbar";

export const HomePage = () => {
	return (
		<div className='container'>
			<Navbar />
			<CategoryList />
		</div>
	);
};
