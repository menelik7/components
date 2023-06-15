import { useState } from "react";
import Table from "./Table";
import { GoArrowSmallUp, GoArrowSmallDown } from "react-icons/go";

export default function SortableTable(props) {
	const [sortOrder, setSortOrder] = useState(null);
	const [sortBy, setSortBy] = useState(null);
	const { config, data } = props;

	const handleSort = (label) => {
		if (sortBy && label !== sortBy) {
			setSortOrder("asc");
			setSortBy(label);
			return;
		}

		if (sortOrder === null) {
			setSortOrder("asc");
			setSortBy(label);
		} else if (sortOrder === "asc") {
			setSortOrder("desc");
			setSortBy(label);
		} else if (sortOrder === "desc") {
			setSortOrder(null);
			setSortBy(null);
		}
	};

	const updatedConfig = config.map((column) => {
		if (!column.sortValue) {
			return column;
		}

		return {
			...column,
			header: () => (
				<th
					className="cursor-pointer hover:bg-gray-100"
					onClick={() => handleSort(column.label)}
				>
					<div className="flex items-center min-w-[100px]">
						{getIcons(column.label, sortBy, sortOrder)}
						{column.label}
					</div>
				</th>
			),
		};
	});

	// Only sort data if sortOrder && sortBy are not null
	// Make a copy of the data prop so that we are not mutating the array and causing re-renders since it is part of the state
	// Find the corret sortValue function and use it for sorting
	// Two sets of config here but the latter (updatedConfig) replaces the former

	let sortedData = data;
	if (sortOrder && sortBy) {
		const { sortValue } = config.find((column) => column.label === sortBy);

		sortedData = [...data].sort((a, b) => {
			const valueA = sortValue(a);
			const valueB = sortValue(b);

			const reverseOrder = sortOrder === "asc" ? 1 : -1;

			if (typeof valueA === "string") {
				return valueA.localeCompare(valueB) * reverseOrder;
			} else {
				return (valueA - valueB) * reverseOrder;
			}
		});
	}

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
