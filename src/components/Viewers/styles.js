import styled from "styled-components";
import { v, t } from "../../styles/variables";

export const ViewerContainer = styled.div`
	margin-top: ${v.mediumDist};
	display: grid;
	grid-template-columns: repeat(5, minmax(0, 1fr));
	grid-gap: 25px;
	padding: ${v.mediumDist} 0px ${v.smallDist};
`;

export const Wrap = styled.div`
	border: 3px solid rgba(249, 249, 249, 0.1);
	border-radius: 10px;
	cursor: pointer;
	box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
		rgb(0 0 0 / 73%) 0px 16px 10px -10px;
	transition: ${t.fastSp};

	&:hover {
		box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
			rgb(0 0 0 / 72%) 0px 30px 22px -10px;
		transform: scale(1.05);
		border: 3px solid rgba(249, 249, 249, 0.8);
	}
`;
