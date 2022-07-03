import React from 'react';
import { useContext } from 'react';
import FavouritesContext from '../store/favouritesCo';
import MeetupList from '../components/meetupElements/meetupList';

function Favourites() {
	const favouriteCtx = useContext(FavouritesContext);
	return (
		<div>
			<p>My fav meets</p>
			<MeetupList meetups={favouriteCtx.favourites} />
		</div>
	);
}

export default Favourites;
