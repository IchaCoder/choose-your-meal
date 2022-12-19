import Image from "next/image";
import Link from "next/link";

const Card = ({ origin, category, name, img }) => {
	return (
		<div className="p-4 border-solid border border-gray-300 hover:shadow-xl w-full">
			<div>
				<img src={img} alt="meal" height="250px" className="w-[400px]" />
			</div>
			<button className="text-primary border-solid border border-primary hover:bg-primary hover:text-white button p-2 rounded-2xl my-4">
				{category}
			</button>
			<h2 className="font-semibold text-2xl mb-4">{name}</h2>
			<p className="text-primary">{origin}</p>
			<Link href={"/"}>
				<button className="rounded-md bg-primary text-white hover:shadow-2xl px-4 py-2 mt-4">
					View More
				</button>
			</Link>
		</div>
	);
};

export default Card;
