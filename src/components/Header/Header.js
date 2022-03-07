import React from "react";
import { HeaderContainer } from "./styles";

const Header = () => {
	return (
		<HeaderContainer>
			<div className='logo'>
				<a href='#'>
					<img src='media/images/logo.svg' alt='Disney-logo' />
				</a>
			</div>
			<ul className='nav-menu'>
				<li>
					<a href='#'>
						<img src='media/images/home-icon.svg' alt='icon' />
						<span>Home</span>
					</a>
				</li>
				<li>
					<a href='#'>
						<img src='media/images/search-icon.svg' alt='icon' />
						<span>Search</span>
					</a>
				</li>
				<li>
					<a href='#'>
						<img src='media/images/watchlist-icon.svg' alt='icon' />
						<span>Watchlist</span>
					</a>
				</li>
				<li>
					<a href='#'>
						<img src='media/images/original-icon.svg' alt='icon' />
						<span>Originals</span>
					</a>
				</li>
				<li>
					<a href='#'>
						<img src='media/images/movie-icon.svg' alt='icon' />
						<span>Movies</span>
					</a>
				</li>
				<li>
					<a href='#'>
						<img src='media/images/series-icon.svg' alt='icon' />
						<span>Series</span>
					</a>
				</li>
			</ul>
			<div className='user-img'>
				<img src='media/images/high.png' alt='userImg' />
			</div>
		</HeaderContainer>
	);
};

export default Header;
