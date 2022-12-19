const settings = {
	dots: true,
	infinite: false,
	speed: 500,
	slidesToShow: 2,
	slidesToScroll: 1,
	autoplay: false,
	initialSlide: 0,
	arrows: true,
	responsive: [
		{
			breakpoint: 900,
			settings: {
				slidesToShow: 2,
				initialSlide: 2,
			},
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
	],
};

export default settings;
