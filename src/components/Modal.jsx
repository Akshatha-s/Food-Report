import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";
const Modal = ({ openModal, closeModal, children }) => {
	const ref = useRef();

	useEffect(() => {
		if (openModal) {
			ref.current?.showModal();
		} else {
			ref.current?.close();
		}
	}, [openModal]);

	return (
		createPortal(<dialog className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md w-3/6"
			ref={ref}
			onCancel={closeModal}
		>
			{children}
			<button className="px-4 py-2 text-xs md:text-base rounded-md bg-violet-700 text-violet-100 hover:bg-violet-100 hover:text-violet-900" onClick={closeModal}>
				Close
			</button>
		</dialog>, document.getElementById('modal'))
	);
}

export default Modal;