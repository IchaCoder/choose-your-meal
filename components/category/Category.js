import { useEffect, useState } from "react";

const Category = ({ meals, filterMeals }) => {
	const [categories, setCategories] = useState([]);
	const getCategories = () => {
		const data = meals.map((meal) => meal.strCategory);
		setCategories([...new Set(data)]);
	};
	useEffect(() => {
		getCategories();
	}, []);

	return (
		<div id="menu" className="flex flex-wrap justify-center gap-x-4">
			{categories &&
				categories.map((category, index) => (
					<button
						key={index}
						className="text-primary border-solid border border-primary hover:bg-primary hover:text-white button p-2 rounded-2xl my-4"
						onClick={() => filterMeals(category)}
					>
						{category}
					</button>
				))}
		</div>
	);
};

export default Category;
