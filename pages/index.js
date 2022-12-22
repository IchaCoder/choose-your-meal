import Head from "next/head";
import { useState } from "react";
import Card from "../components/card/Card";
import Category from "../components/category/Category";
import Hero from "../components/hero/Hero";

export default function Home({ meals }) {
	const [newMeals, setNewMeals] = useState(meals);

	const filterMeals = (category) => {
		const filteredMeals = meals.filter((meal) => meal.strCategory === category);
		setNewMeals(filteredMeals);
	};

	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="">
				<Hero />
				<section className="mt-32 max-w-[90%] md:max-w-[80%] mx-auto">
					<h2 className="text-4xl text-center font-bold pb-8">
						Dont look back
					</h2>
					<Category meals={meals} filterMeals={filterMeals} />
					<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
						{newMeals.slice(0, 12).map((meal) => {
							const {
								idMeal: id,
								strArea: origin,
								strCategory: category,
								strMeal: name,
								strMealThumb: img,
							} = meal;
							return (
								<Card
									key={id}
									origin={origin}
									category={category}
									name={name}
									img={img}
									meal={meal}
								/>
							);
						})}
					</div>
				</section>
			</main>
		</>
	);
}

export const getStaticProps = async () => {
	try {
		const res = await fetch(
			"https://www.themealdb.com/api/json/v1/1/search.php?s="
		);
		const data = await res.json();

		return {
			props: {
				meals: data.meals,
			},
		};
	} catch (error) {}
};
