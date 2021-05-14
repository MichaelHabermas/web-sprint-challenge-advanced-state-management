import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL, ADD_NEW_SMURF, SET_ERROR } from '../actions';

const initialState = {
	smurfs: [],
	isLoading: false,
	errorMessage: ''
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_START:
			return {
				...state,
				isLoading: true
			};
		case FETCH_SUCCESS:
			return {
				...state,
				isLoading: false,
				smurfs: action.payload
			};
		case FETCH_FAIL:
			return {
				...state,
				isLoading: false,
				errorMessage: action.payload
			};
		case ADD_NEW_SMURF:
			const newSmurf = {
				...action.payload,
				id: Date.now()
			};
			return {
				...state,
				smurfs: [...state.smurfs, newSmurf],
				errorMessage: ''
			};
		case SET_ERROR:
			return {
				...state,
				errorMessage: action.payload
			};
		default:
			return state;
	}
};

export default reducer;

//Task List: X
//1. Adds the following state values into the initialState: X
//  - an array of smurfs X
//  - a boolean indicating if the app is loading X
//  - a string indicating a possible error message X

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accommodate the start of a smurf fetch.
//4. Add in a reducer case to accommodate the successful smurf api fetch.
//5. Add in a reducer cases to accommodate the failed smurf api fetch.
//6. Add in a reducer case to accommodate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.
