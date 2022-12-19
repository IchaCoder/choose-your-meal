import GallerySlider from "./GallerySlider";

export default function () {
	return (
		<section className="mt-32 max-w-[90%] md:max-w-[80%] sm:mt-80 lg:mt-32 mx-auto p-4 bg-gray-200">
			<h2 className="text-4xl base:5xl font-semibold md:ml-8">
				Check Out Our <br />{" "}
				<span className="text-[rgba(0,0,0,0.6)]">Beautify Gallery</span>
			</h2>
			<div className="w-52 sm:w-64 h-1 mt-2 md:ml-8 bg-primary "></div>
			<GallerySlider />
		</section>
	);
}
