import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';
export const ADD_NEW_SMURF = 'ADD_NEW_SMURF';
export const SET_ERROR = 'SET_ERROR';

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retrieve smurfs from our server, saves the result of that call to our state and shows an error if one is made.
export const fetchSmurfs = () => {
	return dispatch => {
		dispatch(fetchStart());

		axios
			.get('http://localhost:3333/smurfs')
			.then(resp => {
				console.log('Resp.data: ', resp.data);
				dispatch({ type: FETCH_SUCCESS, payload: resp.data });
			})
			.catch(err => {
				console.log(err);
				dispatch({ type: FETCH_FAIL, payload: err });
			});
	};
};

//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
export const addNewSmurf = newSmurf => {
	return { type: ADD_NEW_SMURF, payload: newSmurf };
};
export const fetchStart = () => {
	return { type: FETCH_START };
};
export const fetchSuccess = smurfs => {
	return { type: FETCH_SUCCESS, payload: smurfs };
};
export const fetchFail = err => {
	return { type: FETCH_FAIL, payload: err };
};
export const setError = errorMessage => {
	return { type: SET_ERROR, payload: errorMessage };
};

//3. Add a standard action that allows us to set the value of the error message slice of state.
