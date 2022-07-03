import { useContext } from 'react';
import classes from './MeerupItem.module.css';
import Card from '../UI/Card/Card';
import FavouriteContext from '../../store/favouritesCo';

function MeetupItem(props) {
	const FavContext = useContext(FavouriteContext);
	const isFav = FavContext.isFavourite(props.id);
	function toggleFavourites() {
		console.log('jestem w toggle fav');
		if (isFav) {
			FavContext.removeFavourite(props.id);
			console.log('jestem w if');
		} else {
			console.log('jestem w else');
			FavContext.addFavourite({
				id: props.id,
				image: props.image,
				title: props.title,
				address: props.address,
				description: props.description,
			});
		}
	}
	return (
		<li className={classes.item}>
			<Card>
				<div className={classes.image}>
					<img src={props.img} alt="" />
				</div>
				<div className={classes.content}>
					<h3>{props.title}</h3>
					<address>{props.address}</address>
					<p>{props.description}</p>
				</div>
				<div className={classes.actions}>
					<button onClick={toggleFavourites}>
						{isFav ? 'Remove from favourites' : 'Add to favourites'}
					</button>
				</div>
			</Card>
		</li>
	);
}

export default MeetupItem;
