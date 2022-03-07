import styled from "styled-components";
import { v, c, t } from "../../styles/variables";

export const HeaderContainer = styled.nav`
	height: ${v.headerHeight};
	background: ${c.headerColor};
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 ${v.largeDist};

	.logo {
		width: 80px;
	}

	.nav-menu {
		display: flex;
		gap: ${v.mediumDist};
		flex: 1;
		margin-left: ${v.xLargeDist};

		a {
			display: flex;
			align-items: center;
			gap: 0.3rem;

			img {
				width: 20px;
			}

			span {
				text-transform: uppercase;
				letter-spacing: 1.42px;
				font-size: ${v.navLink};
				position: relative;

				&::after {
					content: "";
					height: 2px;
					background: ${c.white};
					width: 100%;
					position: absolute;
					bottom: -0.5rem;
					left: 0;
					transform: scaleX(0);
					opacity: 0;
					transform-origin: left;
					transition: ${t.fastSp};
				}

				&:hover::after {
					transform: scaleX(1);
					opacity: 1;
				}
			}
		}
	}

	.user-img {
		width: 4.8rem;
		height: 4.8rem;
		border-radius: 50%;
		cursor: pointer;
	}
`;
