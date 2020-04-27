import { useState } from "react";

export default function useSendGrid() {
	const [status, setStatus] = useState({
		submitted: false,
		submitting: false,
		info: { error: false, msg: null },
	});

	const [inputs, setInputs] = useState(null);

	const handleOnSubmit = async (e) => {
		e.preventDefault();
		setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
		const res = await fetch("/api/send", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(inputs),
		});
		const text = await res.text();
		handleResponse(res.status, text);
	};

	const handleOnChange = (e) => {
		e.persist();
		setInputs((prev) => ({
			...prev,
			[e.target.id]: e.target.value,
		}));
		setStatus({
			submitted: false,
			submitting: false,
			info: { error: false, msg: null },
		});
	};

	const handleResponse = (status, msg) => {
		if (status === 200) {
			setStatus({
				submitted: true,
				submitting: false,
				info: { error: false, msg: msg },
			});
			setInputs(null);
		} else {
			setStatus({
				submitted: false,
				submitting: false,
				info: {
					error: true,
					msg: msg,
				},
			});
		}
	};
	return { handleOnSubmit, handleOnChange, status, inputs };
}
