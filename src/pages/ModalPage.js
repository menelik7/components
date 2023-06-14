import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

export default function ModalPage() {
	const [showModal, setShowModal] = useState(false);

	const handleClose = () => {
		setShowModal(false);
	};

	const handleClick = () => {
		setShowModal(true);
	};

	const actionBar = (
		<div>
			<Button primary onClick={handleClose}>
				I accept
			</Button>
		</div>
	);

	const modal = (
		<Modal onClose={handleClose} actionBar={actionBar}>
			<p>Here is an important agreement for you to accept</p>
		</Modal>
	);
	return (
		<div>
			<Button primary onClick={handleClick}>
				Open Modal
			</Button>
			{showModal && modal}

			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia,
				ducimus ut! Accusamus quis impedit ducimus repudiandae non ab, delectus
				fugiat culpa iste, nam explicabo officiis quam laboriosam dicta quos
				error.
			</p>

			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia,
				ducimus ut! Accusamus quis impedit ducimus repudiandae non ab, delectus
				fugiat culpa iste, nam explicabo officiis quam laboriosam dicta quos
				error.
			</p>

			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia,
				ducimus ut! Accusamus quis impedit ducimus repudiandae non ab, delectus
				fugiat culpa iste, nam explicabo officiis quam laboriosam dicta quos
				error.
			</p>

			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia,
				ducimus ut! Accusamus quis impedit ducimus repudiandae non ab, delectus
				fugiat culpa iste, nam explicabo officiis quam laboriosam dicta quos
				error.
			</p>

			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia,
				ducimus ut! Accusamus quis impedit ducimus repudiandae non ab, delectus
				fugiat culpa iste, nam explicabo officiis quam laboriosam dicta quos
				error.
			</p>

			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia,
				ducimus ut! Accusamus quis impedit ducimus repudiandae non ab, delectus
				fugiat culpa iste, nam explicabo officiis quam laboriosam dicta quos
				error.
			</p>

			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia,
				ducimus ut! Accusamus quis impedit ducimus repudiandae non ab, delectus
				fugiat culpa iste, nam explicabo officiis quam laboriosam dicta quos
				error.
			</p>

			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia,
				ducimus ut! Accusamus quis impedit ducimus repudiandae non ab, delectus
				fugiat culpa iste, nam explicabo officiis quam laboriosam dicta quos
				error.
			</p>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia,
				ducimus ut! Accusamus quis impedit ducimus repudiandae non ab, delectus
				fugiat culpa iste, nam explicabo officiis quam laboriosam dicta quos
				error.
			</p>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia,
				ducimus ut! Accusamus quis impedit ducimus repudiandae non ab, delectus
				fugiat culpa iste, nam explicabo officiis quam laboriosam dicta quos
				error.
			</p>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia,
				ducimus ut! Accusamus quis impedit ducimus repudiandae non ab, delectus
				fugiat culpa iste, nam explicabo officiis quam laboriosam dicta quos
				error.
			</p>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia,
				ducimus ut! Accusamus quis impedit ducimus repudiandae non ab, delectus
				fugiat culpa iste, nam explicabo officiis quam laboriosam dicta quos
				error.
			</p>
		</div>
	);
}
