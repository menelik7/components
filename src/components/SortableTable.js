import useSort from "../hooks/useSort";
import Table from "./Table";
import { GoArrowSmallUp, GoArrowSmallDown } from "react-icons/go";

export default function SortableTable(props) {
	const { config, data } = props;
	const { sortOrder, sortBy, sortedData, setSortColumn } = useSort(
		data,
		config
	);

	const updatedConfig = config.map((column) => {
		if (!column.sortValue) {
			return column;
		}

		return {
			...column,
			header: () => (
				<th
					className="cursor-pointer hover:bg-gray-100"
					onClick={() => setSortColumn(column.label)}
				>
					<div className="flex items-center min-w-[100px]">
						{getIcons(column.label, sortBy, sortOrder)}
						{column.label}
					</div>
				</th>
			),
		};
	});

	return (
		<div>
			<Table {...props} data={sortedData} config={updatedConfig} />
		</div>
	);
}

function getIcons(label, sortBy, sortOrder) {
	if (label !== sortBy) {
		return (
			<div className="text-xl">
				<GoArrowSmallUp />
				<GoArrowSmallDown />
			</div>
		);
	}

	if (sortOrder === null) {
		return (
			<div className="text-xl">
				<GoArrowSmallUp />
				<GoArrowSmallDown />
			</div>
		);
	} else if (sortOrder === "asc") {
		return (
			<div className="text-xl">
				<GoArrowSmallUp />
			</div>
		);
	} else if (sortOrder === "desc") {
		return (
			<div className="text-xl">
				<GoArrowSmallDown />
			</div>
		);
	}
}
