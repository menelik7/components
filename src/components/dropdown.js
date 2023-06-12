import { useState } from "react";
import Panel from "./Panel";
import { GoChevronRight } from "react-icons/go";

export default function Dropdown({ options, value, onChange }) {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	const handleOptionclick = (option) => {
		setIsOpen(false);
		onChange(option);
	};

	const renderedOptions = options.map((option) => {
		return (
			<div
				className="hover:bg-sky-100 rounded cursor-pointer p-1"
				onClick={() => handleOptionclick(option)}
				key={option.value}
			>
				{option.label}
			</div>
		);
	});

	return (
		<div className="w-48 relative">
			<Panel
				className="flex justify-between items-center cursor-pointer"
				onClick={handleClick}
			>
				{value?.label || "Select..."}
				<div className={`text-xl ${isOpen ? "expanded" : "collapsed"}`}>
					<GoChevronRight />
				</div>
			</Panel>

			{isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
		</div>
	);
}
