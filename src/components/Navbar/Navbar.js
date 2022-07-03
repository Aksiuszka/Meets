import React from 'react';
import { useContext } from 'react';
import './Navbar.css';
import { Btn } from './styled';
import { Link } from 'react-router-dom';
import FavouriteContext from '../../store/favouritesCo';

function Navbar() {
	const favouriteCtx = useContext(FavouriteContext);
	return (
		<div className="navbarContainer">
			<Link to="/" style={{ textDecoration: 'none' }}>
				<div className="logoContainer">
					meets<span className="dot">.</span>
				</div>
			</Link>
			<div className="linkHolder">
				<ul className="linksContainer">
					<Link to="/" style={{ textDecoration: 'none' }}>
						<li>Wroc</li>
					</Link>
					<Link to="/new" style={{ textDecoration: 'none' }}>
						<li>Dodaj nowy meetup</li>
					</Link>
					<Link to="/test" style={{ textDecoration: 'none' }}>
						<li>Test</li>
					</Link>
					<Link to="/fav" style={{ textDecoration: 'none' }}>
						<li>
							<div className="makeItButtonLike">
								<Btn>
									Ulubione <span className="badge">{favouriteCtx.totalFavourites}</span>
								</Btn>
							</div>
						</li>
					</Link>
				</ul>
			</div>
		</div>
	);
}

export default Navbar;
