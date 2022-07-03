import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Test from './pages/test';
import Fav from './pages/Favourites';
import New from './pages/NewMeetup';
import AppMeetup from './pages/AppMeetups';
import Navbar from './components/Navbar/Navbar';
import Layout from './components/Layout/Layout';

function App() {
	return (
		<Layout>
			<Navbar />
			<h1>Welcome to React Router!</h1>
			<Routes>
				<Route path="/test" element={<Test />} />
				<Route path="/" element={<AppMeetup />} />
				<Route path="/fav" element={<Fav />} />
				<Route path="/new" element={<New />} />
			</Routes>
		</Layout>
	);
}

export default App;
