import React from "react";
import { Slide, SliderContainer } from "./styles";

const ImageSlider = () => {
	let settings = {
		dots: true,
		infinite: true,
		speed: 2000,
		slidesToShow: 1,
		sliderToScroll: 1,
		autoplay: true,
	};
	return (
		<SliderContainer {...settings}>
			<Slide>
				<img src='/media/images/slider-badging.jpg' alt='' />
			</Slide>
			<Slide>
				<img src='/media/images/slider-badag.jpg' alt='' />
			</Slide>
		</SliderContainer>
	);
};

export default ImageSlider;
