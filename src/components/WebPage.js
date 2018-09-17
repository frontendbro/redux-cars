import React from 'react';
import CarsList from "../containers/cars-list";
import Details from '../containers/details';

const WebPage = () => {
	return(
		<div>
			<h1>Cars:</h1>
			<CarsList />
			<hr />
			<h2>Details:</h2>
			<Details />
		</div>
	)
}

export default WebPage;