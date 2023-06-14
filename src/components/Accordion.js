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
					className="flex justify-between items-center p-3 bg-gray-50 border-b cursor-pointer"
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
				{isExpanded && <div className="border-b p-5">{item.content}</div>}
			</div>
		);
	});

	return <div className="border-x border-t rounded">{renderedItems}</div>;
}
