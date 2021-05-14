import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL, ADD_NEW_SMURF } from '../actions';

const initialState = {
	//Task List: X
	//1. Adds the following state values into the initialState: X
	//  - an array of smurfs X
	smurfs: [],
	//  - a boolean indicating if the app is loading X
	isLoading: false,
	//  - a string indicating a possible error message X
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
				smurfs: [...state.smurfs, newSmurf]
			};
		default:
			return state;
	}
};

export default reducer;

//2. Add in the arguments needed to complete a standard reducer function.
// X

//3. Add in a reducer case to accommodate the start of a smurf fetch.
// X

//4. Add in a reducer case to accommodate the successful smurf api fetch.
// X

//5. Add in a reducer cases to accommodate the failed smurf api fetch.
// X

//6. Add in a reducer case to accommodate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
// X

//7. Add in a reducer case that adds in a value to the error message.
// ? X
