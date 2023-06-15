// import Table from "../components/Table";
import SortableTable from "../components/SortableTable";

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
		// Even though the render() and sortValue() functions look exactly the same at first glance, there are
		// scenarios where the render function might want to return a jsx element or something else
		// which would negatively affect out sort function if it were to be used in place of sortValue
		{
			label: "Name",
			render: ({ name }) => name,
			sortValue: ({ name }) => name,
		},
		{
			label: "Color",
			render: ({ color }) => <div className={`p-3 m-2 ${color}`}></div>,
		},
		{
			label: "Score",
			render: ({ score }) => score,
			sortValue: ({ score }) => score,
		},
	];

	const keyFn = (rowData) => {
		return rowData.name;
	};

	return <SortableTable data={data} config={config} keyFn={keyFn} />;
}
