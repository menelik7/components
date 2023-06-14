export default function Table({ data, config, keyFn }) {
	const renderedHeaders = config.map(({ label }) => {
		return <th key={label}>{label}</th>;
	});

	const renderedRows = data.map((rowData) => {
		const renderedCells = config.map(({ label, render }) => {
			return (
				<td className="p-2" key={label}>
					{render(rowData)}
				</td>
			);
		});

		return (
			<tr className="border-b" key={keyFn(rowData)}>
				{renderedCells}
			</tr>
		);
	});

	return (
		<table className="table-auto border-spacing-2">
			<thead>
				<tr className="border-b-2">{renderedHeaders}</tr>
			</thead>
			<tbody>{renderedRows}</tbody>
		</table>
	);
}
