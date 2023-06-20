import { useState, useEffect, useRef } from "react";
import Panel from "./Panel";
import { GoChevronDown } from "react-icons/go";

export default function Dropdown({ options, value, onChange }) {
	const [isOpen, setIsOpen] = useState(false);

	// TODO animation on close

	const divEl = useRef();

	useEffect(() => {
		const handler = (event) => {
			if (!divEl.current) return;

			if (!divEl.current.contains(event.target)) {
				setIsOpen(false);
			}
		};

		document.addEventListener("click", handler, true);

		return () => {
			document.removeEventListener("click", handler);
		};
	}, []);

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
				className="hover:bg-sky-100 rounded cursor-pointer p-3"
				onClick={() => handleOptionclick(option)}
				key={option.value}
			>
				{option.label}
			</div>
		);
	});

	return (
		<div ref={divEl} className="w-48 relative">
			<Panel
				className="flex justify-between items-center cursor-pointer"
				onClick={handleClick}
			>
				{value?.label || "Select..."}
				<div
					className={`text-xl ${isOpen ? "expanded-icon" : "collapsed-icon"}`}
				>
					<GoChevronDown />
				</div>
			</Panel>

			{isOpen && (
				<Panel className="absolute top-full options expanded !p-0">
					{renderedOptions}
				</Panel>
			)}
		</div>
	);
}
