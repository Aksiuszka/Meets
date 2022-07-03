import React from 'react';
import classes from './MeerupItem.module.css';
import MeetupItem from './MeetupItem';

function meetupList(props) {
	console.log('elo tu jest lista!');
	console.log(props);
	return (
		<ul className={classes.list}>
			{props.meetups.map(meetup => (
				<MeetupItem
					key={meetup.id}
					id={meetup.id}
					title={meetup.title}
					img={meetup.img}
					address={meetup.address}
					description={meetup.description}
				/>
			))}
		</ul>
	);
}

export default meetupList;
