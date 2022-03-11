import React from "react";
import { ViewerContainer, Wrap } from "./styles";

const Viewers = () => {
	return (
		<ViewerContainer>
			<Wrap>
				<img src='/media/images/viewers-disney.png' alt='disney' />
			</Wrap>
			<Wrap>
				<img src='/media/images/viewers-pixar.png' alt='disney' />
			</Wrap>
			<Wrap>
				<img src='/media/images/viewers-marvel.png' alt='disney' />
			</Wrap>
			<Wrap>
				<img src='/media/images/viewers-starwars.png' alt='disney' />
			</Wrap>
			<Wrap>
				<img src='/media/images/viewers-national.png' alt='disney' />
			</Wrap>
		</ViewerContainer>
	);
};

export default Viewers;
