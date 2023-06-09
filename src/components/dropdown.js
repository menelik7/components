import { useState } from "react";

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
			<div onClick={() => handleOptionclick(option)} key={option.value}>
				{option.label}
			</div>
		);
	});

	return (
		<div>
			<div className="cursor-pointer" onClick={handleClick}>
				{value?.label || "Select..."}
			</div>
			{isOpen && <div>{renderedOptions}</div>}
		</div>
	);
}
