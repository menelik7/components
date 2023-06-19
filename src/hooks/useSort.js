import { useState } from "react";

export default function useSort(data, config) {
	const [sortOrder, setSortOrder] = useState(null);
	const [sortBy, setSortBy] = useState(null);

	const setSortColumn = (label) => {
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

	return {
		sortOrder,
		sortBy,
		sortedData,
		setSortColumn,
	};
}
