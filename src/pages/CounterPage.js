import useCounter from "../hooks/useCounter";
import Button from "../components/Button";
import Panel from "../components/Panel";

export default function CounterPage({ initialCount }) {
	const { state, increment, decrement, reset, setValueToAdd, addValueToCount } =
		useCounter(initialCount);

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

			<form onSubmit={addValueToCount}>
				<label>Add a lot</label>
				<input
					value={state.valueToAdd || ""}
					onChange={setValueToAdd}
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
