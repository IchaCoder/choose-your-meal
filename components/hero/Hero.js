import Link from "next/link";
import Image from "next/image";

const Hero = () => (
	<section className="max-w-[90%] md:max-w-[80%] flex lg:flex-row flex-col-reverse justify-between gap-16 mx-auto mt-10  base:mt-20">
		<div>
			<h1 className="text-4xl base:text-5xl font-bold">
				Architecture that recognizes all your sensibilities
			</h1>
			<h3 className="pt-7">
				Welcome to Anisarp, a reliable business partner on your path to building
				a better looking future for all.
			</h3>
			<Link href={"/"}>
				<button className="bg-primary text-white font-semibold rounded-sm p-4 mt-8">
					Make an Enquiry
				</button>
			</Link>
		</div>
		<Image
			src="/hero_img.jpeg"
			alt="building"
			width="600"
			className="-mr-36"
			height="700"
		/>
	</section>
);

export default Hero;
