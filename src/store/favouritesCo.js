import { createContext, useState } from 'react';
const FavouriteContext = createContext({
	favourites: [],
	totalFavourites: 0,
	addFavourite: favouritemeetup => {},
	removeFavourite: id => {},
	isFavourite: id => {},
});

export function FavouriteContextProvider(props) {
	const [userFavourites, setUserFavourites] = useState([]);
	function addFavouriteHandler(favouritemeetup) {
		setUserFavourites(prev => {
			return prev.concat(favouritemeetup);
		});
	}
	function removeFavouriteHandler(id) {
		setUserFavourites(prev => {
			return prev.filter(meetup => meetup.id !== id);
		});
	}
	function favNumber(id) {
		return userFavourites.some(meetup => meetup.id === id);
	}
	const context = {
		favourites: userFavourites,
		totalFavourites: userFavourites.length,
		addFavourite: addFavouriteHandler,
		removeFavourite: removeFavouriteHandler,
		isFavourite: favNumber,
	};
	return <FavouriteContext.Provider value={context}>{props.children}</FavouriteContext.Provider>;
}
export default FavouriteContext;
