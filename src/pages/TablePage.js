import Table from "../components/Table";

export default function TablePage() {
	const data = [
		{
			name: "Orange",
			color: "bg-orange-500",
			score: 5,
		},
		{
			name: "Apple",
			color: "bg-red-500",
			score: 3,
		},
		{
			name: "Banana",
			color: "bg-yellow-500",
			score: 1,
		},
		{
			name: "Lime",
			color: "bg-green-500",
			score: 4,
		},
	];

	const config = [
		{
			label: "Name",
			render: ({ name }) => name,
		},
		{
			label: "Color",
			render: ({ color }) => <div className={`p-3 m-2 ${color}`}></div>,
		},
		{
			label: "Score",
			render: ({ score }) => score,
		},
	];

	const keyFn = (rowData) => {
		return rowData.name;
	};

	return <Table data={data} config={config} keyFn={keyFn} />;
}
