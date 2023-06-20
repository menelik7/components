import { useState } from "react";
import { GoChevronDown } from "react-icons/go";

export default function Accordion({ items }) {
	const [expandedIndex, setExpandedIndex] = useState(-1);

	const handleClick = (clickedIndex) => {
		if (clickedIndex === expandedIndex) {
			setExpandedIndex(-1);
			return;
		}
		setExpandedIndex(clickedIndex);
	};

	const renderedItems = items.map((item, index) => {
		const isExpanded = index === expandedIndex;

		return (
			<div key={item.id}>
				<div
					className="flex justify-between items-center p-3 bg-gray-50 border-b border-x cursor-pointer"
					onClick={() => handleClick(index)}
				>
					<div>{item.label}</div>
					<div
						className={`text-2xl ${
							isExpanded ? "expanded-icon" : "collapsed-icon"
						}`}
					>
						<GoChevronDown />
					</div>
				</div>

				<div
					className={`border-x border-b h-0 ${
						isExpanded
							? "open-accordion expanded"
							: "close-accordion collapsed invisible opacity-100"
					}`}
				>
					<div className="p-5">{item.content}</div>
				</div>
			</div>
		);
	});

	return <div className="border-t rounded">{renderedItems}</div>;
}
