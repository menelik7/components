import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {
	return (
		<div>
			<div>
				<Button secondary outline rounded className="mb-2">
					<GoBell />
					Click me
				</Button>
			</div>
			<div>
				<Button danger outline>
					<GoCloudDownload />
					Download
				</Button>
			</div>
			<div>
				<Button warning>
					<GoDatabase />
					Database
				</Button>
			</div>
			<div>
				<Button secondary outline>
					Hide Ads
				</Button>
			</div>
			<div>
				<Button primary rounded>
					Something
				</Button>
			</div>
		</div>
	);
}

export default ButtonPage;
