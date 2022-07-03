import { useState, useEffect } from 'react';
import MeetupList from '../components/meetupElements/meetupList';

function AppMeetups() {
	const [loading, setLoading] = useState(true);
	const [loadedData, setLoadedData] = useState(null);
	// useEffect(() => {
	// 	setLoading(true);
	// 	fetch('https://db-meets-default-rtdb.firebaseio.com/meetupsy.json')
	// 		.then(res => {
	// 			return res.json();
	// 		})
	// 		.then(data => {
	// 			const meetupsy = [];
	// 			for (const key in data) {
	// 				const meet = {
	// 					id: key,
	// 					...data[key],
	// 				};
	// 				meetupsy.push(meet);
	// 			}
	// 			setLoading(false);
	// 			setLoadedData(data);
	// 		});
	// }, []);
	// if (loading) {
	// 	return (
	// 		<section>
	// 			<p>laduje sie</p>
	// 		</section>
	// 	);
	// }
	useEffect(() => {
		console.log('jestem tu!');
		setLoading(true);
		fetch('https://db-meets-default-rtdb.firebaseio.com/meetupsy.json')
			.then(res => {
				return res.json();
			})
			.then(data => {
				const array = [];
				for (const key in data) {
					const item = {
						id: key,
						...data[key],
					};
					console.log(item);
					array.push(item);
				}
				console.log(array);
				setLoadedData(array);
				setLoading(false);
			});
	}, []);
	const DUMMY_DATA = [
		{
			id: 'm1',
			title: 'This is a first meetup',
			image:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
			address: 'Meetupstreet 5, 12345 Meetup City',
			description:
				'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
		},
		{
			id: 'm2',
			title: 'This is a second meetup',
			image:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
			address: 'Meetupstreet 5, 12345 Meetup City',
			description:
				'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
		},
	];

	return (
		<div>
			{!loading && <MeetupList meetups={loadedData} />}
			<p>elotest</p>
		</div>
	);
}

export default AppMeetups;
