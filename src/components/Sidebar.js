import Link from "./Link";

export default function Sidebar() {
	const links = [
		{
			label: "Dropdown",
			path: "/",
		},
		{
			label: "Accordion",
			path: "/accordion",
		},
		{
			label: "Buttons",
			path: "/buttons",
		},
	];

	const renderedLinks = links.map((link) => {
		const { label, path } = link;
		return (
			<Link
				activeClassName="font-bold border-l-4 border-blue-500 pl-2"
				className="mb-3"
				key={label}
				to={path}
			>
				{label}
			</Link>
		);
	});
	return (
		<div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
			{renderedLinks}
		</div>
	);
}
