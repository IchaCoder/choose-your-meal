import Image from "next/image";
import Link from "next/link";

export default function Services() {
	return (
		<>
			<section className="max-w-[90%] md:max-w-[80%] mx-auto mt-32 lg:flex flex-row-reverse relative">
				<Image
					src="/assets/service_8.jpeg"
					alt="architecture"
					width="500"
					height="300"
					className="w-[100vw] lg:w-[500px] lg:h-[450px] object-cover"
				/>
				<div className="py-10 p-8 bg-gray-200 sm:absolute z-10 sm:w-[90%] lg:w-[50%] sm:-bottom-72 lg:-bottom-14 lg:left-28">
					<h2 className="font-bold text-4xl base:text-5xl">
						We turn Your Ideas <br />{" "}
						<span className="text-primary">To Become Reality</span>
					</h2>
					<p className="mt-2">
						We blend our diversity with emperical and ethnographic research,
						immersing ourselves in our client's worlds to understand their needs
						in their context
					</p>
					<Link href={"/"}>
						<button className="border-primary border-solid border text-primary text-xl  hover:bg-primary hover:text-white font-semibold rounded-sm p-4 mt-8 button">
							Explore Projects
						</button>
					</Link>
				</div>
			</section>
			<section className="max-w-[90%] md:max-w-[80%] mx-auto mt-32 sm:mt-80 lg:flex lg:mt-32 relative">
				<Image
					src="/assets/service_4.jpeg"
					alt="architecture"
					width="500"
					height="300"
					className="w-[100vw] lg:w-[500px] lg:h-[450px] object-cover"
				/>
				<div className="py-10 p-8 bg-gray-200 sm:absolute z-10 sm:w-[90%] lg:w-[50%] sm:-bottom-52 lg:bottom-14 lg:right-28">
					<h2 className="font-bold text-4xl base:text-5xl">
						What We <span className="text-primary">Do</span>
					</h2>
					<p className="mt-2">
						We address requirements and constraints with the right mix of
						analytical thinking, creativity and artistry - designing buildings
						that make a statement and enrich our experience.
					</p>
				</div>
			</section>
		</>
	);
}
