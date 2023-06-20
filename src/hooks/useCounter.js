import { useReducer } from "react";

const INCREMENT_COUNT = "increment";
const DECREMENT_COUNT = "decrement";
const SET_VALUE_TO_ADD = "set-value-to-add";
const ADD_VALUE_TO_COUNT = "add-value-to-count";
const RESET_COUNT = "reset";

const reducer = (state, action) => {
	switch (action.type) {
		case INCREMENT_COUNT:
			return {
				...state,
				count: state.count + 1,
			};
		case DECREMENT_COUNT:
			return {
				...state,
				count: state.count - 1,
			};
		case RESET_COUNT:
			return {
				...state,
				count: action.payload,
			};
		case SET_VALUE_TO_ADD:
			return {
				...state,
				valueToAdd: action.payload,
			};
		case ADD_VALUE_TO_COUNT:
			return {
				...state,
				count: state.count + state.valueToAdd,
				valueToAdd: 0,
			};
		default:
			return state;
	}
};

export default function useCounter(initialCount) {
	const [state, dispatch] = useReducer(reducer, {
		count: initialCount,
		valueToAdd: 0,
	});

	const increment = () => {
		dispatch({
			type: INCREMENT_COUNT,
		});
	};

	const decrement = () => {
		dispatch({
			type: DECREMENT_COUNT,
		});
	};

	const reset = () => {
		dispatch({
			type: RESET_COUNT,
			payload: initialCount,
		});
	};

	const setValueToAdd = (event) => {
		const value = parseInt(event.target.value) || 0;

		dispatch({
			type: SET_VALUE_TO_ADD,
			payload: value,
		});
	};

	const addValueToCount = (event) => {
		event.preventDefault();

		dispatch({
			type: ADD_VALUE_TO_COUNT,
		});
	};

	return {
		state,
		increment,
		decrement,
		reset,
		setValueToAdd,
		addValueToCount,
	};
}
