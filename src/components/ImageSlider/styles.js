import styled from "styled-components";
import Slider from "react-slick";
import { v, c, t } from "../../styles/variables";

export const SliderContainer = styled(Slider)`
	padding-top: ${v.mediumDist};

	ul {
		li {
			&.slick-active button::before {
				color: ${c.white};
			}
			button {
				&::before {
					font-size: 10px;
					color: rgb(150, 158, 171);
				}
			}
		}
	}

	.slick-list {
		overflow: visible;
	}

	.slick-slide div {
		outline: none;
	}

	button {
		z-index: 1;
	}
`;

export const Slide = styled.div`
	cursor: pointer;

	img {
		border: 4px solid transparent;
		border-radius: 4px;
		box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
			rgb(0 0 0 / 73%) 0px 16px 10px -10px;
		transition: ${t.fastSp};

		&:hover {
			border: 4px solid rgba(249, 249, 249, 0.8);
		}
	}
`;
