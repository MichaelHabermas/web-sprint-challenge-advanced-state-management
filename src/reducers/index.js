export const initialState = {
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
		default:
			return state;
	}
};

export default reducer;

//2. Add in the arguments needed to complete a standard reducer function. X
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.
