import { useState } from 'react';
import classes from './newMeetupForm.module.css';
import Card from '../UI/Card/Card';
import { useNavigate } from 'react-router-dom';

function NewMeetupForm(props) {
	const navigate = useNavigate();
	const [title, setTitle] = useState('');
	const [image, setImg] = useState('');
	const [address, setAddress] = useState('');
	const [description, setDescription] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		const data = { title, image, address, description };
		console.log(address);
		fetch('https://db-meets-default-rtdb.firebaseio.com/meetupsy.json', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: { 'Content-Type': 'application/jso' },
		}).then(() => {
			console.log('dodalimy wpis');
			navigate('/');
		});
	};

	return (
		<Card>
			<form className={classes.form} onSubmit={handleSubmit}>
				<div className={classes.control}>
					<label htmlFor="title">Title</label>
					<input type="text" required id="title" onChange={e => setTitle(e.target.value)} />
				</div>
				<div className={classes.control}>
					<label htmlFor="img">Image</label>
					<input type="url" id="img" onChange={e => setImg(e.target.value)} />
				</div>
				<div className={classes.control}>
					<label htmlFor="address">Address</label>
					<input type="text" required id="address" onChange={e => setAddress(e.target.value)} />
				</div>
				<div className={classes.control}>
					<label htmlFor="description">Description</label>
					<textarea
						id="description"
						required
						rows="7"
						onChange={e => setDescription(e.target.value)}
					></textarea>
				</div>
				<div className={classes.action}>
					<button type="submit">Add meetup</button>
				</div>
			</form>
		</Card>
	);
}

export default NewMeetupForm;
