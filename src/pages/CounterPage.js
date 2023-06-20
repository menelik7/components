import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

const INCREMENT_COUNT = "increment";
const DECREMENT_COUNT = "decrement";
const SET_VALUE_TO_ADD = "set-value-to-add";
const ADD_VALUE_TO_COUNT = "add-value-to-add";
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
				count: 0,
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

export default function CounterPage({ initialCount }) {
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
		});
	};

	const handleChange = (event) => {
		const value = parseInt(event.target.value) || 0;

		dispatch({
			type: SET_VALUE_TO_ADD,
			payload: value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		dispatch({
			type: ADD_VALUE_TO_COUNT,
		});
	};

	return (
		<Panel className="m-3">
			<h1 className="text-lg mb-3">Count is: {state.count}</h1>
			<div className="flex flex-row gap-2">
				<Button primary onClick={increment}>
					Increment
				</Button>
				<Button secondary outline onClick={decrement}>
					Decrement
				</Button>
				<Button danger onClick={reset}>
					Reset
				</Button>
			</div>

			<form onSubmit={handleSubmit}>
				<label>Add a lot</label>
				<input
					value={state.valueToAdd || ""}
					onChange={handleChange}
					type="number"
					className="p-1 m-3 bg-gray-50 border border-gray-300"
				/>
				<Button success type="submit">
					Add
				</Button>
			</form>
		</Panel>
	);
}
