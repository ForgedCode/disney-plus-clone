import React from "react";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import Viewers from "../../components/Viewers/Viewers";
import { HomeContainer } from "./styles";

const Home = () => {
	return (
		<HomeContainer>
			<ImageSlider />
			<Viewers />
		</HomeContainer>
	);
};

export default Home;
