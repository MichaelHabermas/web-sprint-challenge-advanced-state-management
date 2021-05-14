import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// Components
import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';

// styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Actions
import { fetchSmurfs } from './actions';

const App = props => {
	const { dispatch } = props;

	// gets the initial data for display
	useEffect(() => {
		dispatch(fetchSmurfs());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="App">
			<Header />

			<main>
				<SmurfList />
				<AddForm />
			</main>
		</div>
	);
};

export default connect()(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component first loads.
