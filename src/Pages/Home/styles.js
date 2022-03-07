import styled from "styled-components";
import { v } from "../../styles/variables";

export const HomeContainer = styled.main`
	min-height: calc(100vh - (${v.headerHeight}));
	padding: 0 ${v.largeDist};
	position: relative;

	&::before {
		background: url("/media/images/home-background.png") center center / cover
			no-repeat fixed;
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: -1;
	}
`;
