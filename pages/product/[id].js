const Details = ({ meal }) => {
	const newMeal = meal.meals[0]; // getting the post as it is a bit nested
	const {
		strArea: origin,
		strCategory: category,
		strMeal: name,
		strMealThumb: img,
		strIngredient1: ig1,
		strIngredient2: ig2,
		strIngredient3: ig3,
		strIngredient4: ig4,
		strInstructions: instructions,
	} = newMeal;
	return (
		<section className="mt-32 max-w-[90%] md:max-w-[60%] mx-auto shadow-2xl p-10">
			<div className="flex flex-col md:flex-row gap-20">
				<div>
					<img
						src={img}
						alt="meal"
						height="200px"
						className="w-full md:w-[400px]"
					/>
				</div>
				<div>
					<h1 className="font-bold text-3xl">{name}</h1>
					<button className="text-primary border-solid border border-primary hover:bg-primary hover:text-white button p-2 rounded-2xl my-4">
						{category}
					</button>
					<p>Ingredients</p>
					<ul className="list-disc">
						<li className="ml-5">{ig1}</li>
						<li className="ml-5">{ig2}</li>
						<li className="ml-5">{ig3}</li>
						<li className="ml-5">{ig4}</li>
					</ul>
					<p className="mt-4 text-sm text-primary">{origin}</p>
				</div>
			</div>
			<div className="mt-8">
				<h2 className="text-lg font-semibold">Instructions</h2>
				<p>{instructions}</p>
			</div>
		</section>
	);
};

export default Details;

export const getServerSideProps = async (context) => {
	const { id } = context.query;
	try {
		const res = await fetch(
			`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
		);
		const meal = await res.json();
		return {
			props: {
				meal,
			},
		};
	} catch (error) {
		console.log(error);
	}
};
