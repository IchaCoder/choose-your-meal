import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Card from "../components/card/Card";
import Hero from "../components/hero/Hero";
import Nav from "../components/nav/Nav";

export default function Home({ meals }) {
	console.log(meals);

	return (
		<div className="font-Poppins">
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="">
				<Nav />
				<Hero />
				<section className="mt-32 max-w-[90%] md:max-w-[80%] mx-auto">
					<h2 className="text-4xl text-center font-bold pb-8">
						Dont look back
					</h2>
					<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
						{meals.slice(0, 10).map((item) => {
							const {
								idMeal: id,
								strArea: origin,
								strCategory: category,
								strMeal: name,
								strMealThumb: img,
							} = item;
							console.log(name);
							return (
								<Card
									key={id}
									origin={origin}
									category={category}
									name={name}
									img={img}
								/>
							);
						})}
					</div>
				</section>
			</main>
			<footer className="flex justify-center">
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{" "}
					<span>
						<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
					</span>
				</a>
			</footer>
		</div>
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
