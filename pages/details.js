const Details = () => {
	return (
		<section className="mt-32 max-w-[90%] md:max-w-[60%] mx-auto shadow-2xl p-4">
			<div className="flex flex-col md:flex-row gap-20">
				<div>
					<img
						src="/hero_img.jpeg"
						alt="meal"
						height="400px"
						className="w-full md:w-[400px]"
					/>
				</div>
				<div>
					<h1 className="font-bold text-3xl">Corda</h1>
					<button className="text-primary border-solid border border-primary hover:bg-primary hover:text-white button p-2 rounded-2xl my-4">
						pork
					</button>
					<p>Ingredients</p>
					<ul className="list-disc">
						<li className="ml-5">Onion</li>
						<li className="ml-5">Onion</li>
						<li className="ml-5">Onion</li>
						<li className="ml-5">Onion</li>
					</ul>
				</div>
			</div>
			<div className="mt-8">
				<h2 className="text-lg font-semibold">Description</h2>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
					doloribus totam molestiae sunt ex officiis veniam repellat laboriosam
					cupiditate, odit animi minima tempora consequatur nesciunt vel quae
					sequi debitis labore!
				</p>
			</div>
		</section>
	);
};

export default Details;
