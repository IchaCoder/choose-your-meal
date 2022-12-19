import Link from "next/link";
import Image from "next/image";

const Hero = () => (
	<section className="max-w-[90%] md:max-w-[80%] flex justify-between gap-16 mx-auto mt-10  base:mt-20">
		<div className="text-center md:max-w-[60%] mx-auto">
			<h1 className="text-4xl base:text-5xl font-bold">
				The Best Meals and Ingredients Right at Your Door
			</h1>
			<h3 className="pt-7">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi corrupti
				quasi soluta placeat, impedit dignissimos nisi voluptatem officia
				obcaecati, excepturi repellat. Quae placeat vel eius aliquid et
				architecto tempora explicabo.
			</h3>
			<Link href={"/"}>
				<button className="bg-primary text-white font-semibold rounded-sm p-4 mt-8">
					Lets get started
				</button>
			</Link>
		</div>
	</section>
);

export default Hero;
